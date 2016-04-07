Package.describe({
  name: 'pushplaybang:svg-wrapper',
  version: '0.0.1',
  summary: 'conveninece template wrapper for SVGs',
  git: 'https://github.com/Pushplaybang/meteor-svg-icon-wrapper',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('blaze-html-templates');
  api.use('ecmascript');
  api.addFiles('template.html', 'client');
  api.addFiles('helpers.js', 'client');
});
