pitkin
======

Repository with Yeoman / Bower / Grunt based projects using Foundation 5 sass version.

[![Build Status](https://travis-ci.org/robkuijpers/pitkin.png?branch=master)](https://travis-ci.org/robkuijpers/pitkin)

First install nodejs, this you also installs npm.

For easy selecting a nodejs version or updating nodejs install nvm.

Next install Yeoman, Grunt and Bower.

Use the Yeoman generator-webapp.

Use Bower to uninstall sass-bootstrap.

Use Bower to install Foundation 5.

Update bower.json and run 'bower update'.

Update /app/index.html:
  Remove bootstrap javascript.
  Add HTML for layout sample from Foundation site. 

Copy _setting.scss from /app/bower_components/foundation/scss/ to /app/styles/foundation/

Update /app/styles/main.scss:
  @import "./foundation/settings";
  @import "../bower_components/foundation/scss/normalize";
  @import "../bower_components/foundation/scss/foundation";
  
Commit and push to GitHub.

Create travis-CI project.

Update README.md with Travis icon.

Setup RequireJS to load jQuery and Foundation5 incl. modules and vendor extentions.

Add foundation-icon font. Download, create fonts directory, copy fondation-icons.css to app/styles/foundation/_foundation-icons.scss (because compass needs to compile this file), edit src url to point to the fonts.

Create a dist build:

  grunt dist

----------------------------

TODO: add my photo to linkedin and update, github, whatsapp.
TODO: test Foundation javascript components with requirejs and use extra javascript/jquery plugins as touch etc.
TODO: add foundation icon fonts and build in dist.
TODO: publish Grunt dist directory to webserver.
TODO: add gui tests with headless browser.
TODO: create Spring Boot app with JSON rest service and mongodb
TODO: create nodejs / express / mongodb app with rest service (MEAN stack).
TODO: add AngularJS and invoke rest services.

Notes:
  - use separate modernizr: (1) its included in the generator, (2) has all options included, (3) needs to be on top anyway so cannot load with requirejs, (4) easy upgrade with bower.json.
  - use separate jquery: (1) included in generator, easy upgrade with bower.json to latest version.
