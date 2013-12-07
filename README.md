pitkin
======

Repository with Yeoman / Bower / Grunt based projects using Foundation 5 sass version.

[![Build Status](https://travis-ci.org/robkuijpers/pitkin.png?branch=master)](https://travis-ci.org/robkuijpers/pitkin)

First install nodejs, this you also installs npm.

For easy selecting a nodejs version or updating nodejs install nvm.

Next install Yeoman, Grunt and Bower.

Use the Yeoman generator-webapp.

Use Bower to uninstall sass-bootstrap.

Use Bower to install foundation (5).

Update bower.json and run boer update.

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

Setup RequireJS to load jQuery and Foundation5 incl. modules.

----------------------------

TODO: add my photo to linkedin and update, github, whatsapp.
TODO: test Foundation javascript components with requirejs and use extra javascript/jquery plugins as touch etc.
TODO: add custom scss in main.scss and/or sass fragments.
TODO: add foundation icon fonts and build in dist
TODO: publish Grunt dist directory to webserver.
TODO: add gui tests with headless browser.
TODO: create Spring Boot app with JSON rest service.
TODO: create nodejs / express / mongo app with rest service (MEAN stack).
TODO: add AngularJS and invoke rest services.

Question: should we use jquery and modernizr from foundation or the separate installed ones? pro/cons.
  - use separate modernizr: (1) its included in the generator, (2) needs to be on top anyway so cannot load with requirejs.
    (3) easy upgrade with bower.json, until we know what is the difference with foundation's modernizr.
  - use separate jquery: (1) included in generator, easy upgrade with bower.json
