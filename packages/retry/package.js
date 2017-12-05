Package.describe({
  summary: "Retry logic with exponential backoff",
  version: '1.1.0-beta161.14'
});

Package.onUse(function (api) {
  api.use('ecmascript');
  api.use('random');
  api.mainModule('retry.js');
  api.export('Retry');
});
