// Dev-server endpoint that keeps the component checklist in a git-tracked file (checklist.json),
// so checks made on any device connected to this Metro end up in the repo and can be shared via git.
//
//   GET /__checklist                          -> ["components/Button", ...]
//   PUT /__checklist  { key, checked }        -> updated list
const fs = require('node:fs');
const path = require('node:path');

const ROUTE = '/__checklist';
const FILE = path.join(__dirname, '..', 'checklist.json');

function readChecklist() {
  try {
    const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function writeChecklist(keys) {
  // Sorted, one key per line: keeps git diffs small and merges between teammates easy.
  const sorted = [...new Set(keys)].sort();
  const tmp = `${FILE}.tmp`;
  fs.writeFileSync(tmp, `${JSON.stringify(sorted, null, 2)}\n`);
  fs.renameSync(tmp, FILE);
  return sorted;
}

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

function checklistMiddleware(req, res, next) {
  if (!req.url || req.url.split('?')[0] !== ROUTE) return next();

  if (req.method === 'GET') return sendJson(res, 200, readChecklist());

  if (req.method === 'PUT') {
    let raw = '';
    req.on('data', (chunk) => (raw += chunk));
    req.on('end', () => {
      try {
        const { key, checked } = JSON.parse(raw);
        if (typeof key !== 'string' || typeof checked !== 'boolean') {
          return sendJson(res, 400, { error: 'Expected { key: string, checked: boolean }' });
        }
        const current = readChecklist().filter((k) => k !== key);
        sendJson(res, 200, writeChecklist(checked ? [...current, key] : current));
      } catch {
        sendJson(res, 400, { error: 'Invalid JSON body' });
      }
    });
    return;
  }

  sendJson(res, 405, { error: 'Method not allowed' });
}

module.exports = { checklistMiddleware };
