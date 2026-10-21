const { getDefaultConfig } = require('expo/metro-config');

const { checklistMiddleware } = require('./server/checklistMiddleware');

const config = getDefaultConfig(__dirname);

config.server = {
  ...config.server,
  enhanceMiddleware: (metroMiddleware) => (req, res, next) =>
    checklistMiddleware(req, res, () => metroMiddleware(req, res, next)),
};

module.exports = config;
