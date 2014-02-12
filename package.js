Package.describe({
  summary: "HTML5 placeholder shim, a jQuery plugin for browsers that don't support placeholders."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('jquery.html5-placeholder-shim.js', 'client');
});