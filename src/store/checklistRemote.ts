import Constants from 'expo-constants';

// Talks to the /__checklist endpoint served by this repo's Metro (see server/checklistMiddleware.js).
// hostUri is the dev server the app loaded its bundle from, so every device hits the same checklist.json.
function checklistUrl(): string | null {
  const hostUri = Constants.expoConfig?.hostUri;
  return hostUri ? `http://${hostUri}/__checklist` : null;
}

export async function fetchRemoteChecklist(): Promise<string[] | null> {
  const url = checklistUrl();
  if (!url) return null;
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`GET checklist failed: ${response.status}`);
  return response.json();
}

export async function saveRemoteCheck(key: string, checked: boolean): Promise<string[] | null> {
  const url = checklistUrl();
  if (!url) return null;
  const response = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key, checked }),
  });
  if (!response.ok) throw new Error(`PUT checklist failed: ${response.status}`);
  return response.json();
}
