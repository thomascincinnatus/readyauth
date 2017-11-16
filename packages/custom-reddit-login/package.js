Package.describe({
  name: "custom-reddit-login"
});

Package.onUse( function(api) {

  api.use([
    'vulcan:core',
    'pandawhisperer:accounts-reddit'
  ]);

  api.addFiles('lib/client.js', 'client');
});
