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

TODO: add my photo to linkedin, github, whatsapp.

TODO: add Foundation javascript components with requirejs.
TODO: add custom javascript code in app.js and javascript modules with requirejs.
TODO: add custom scss in main.scss and/or sass fragments.
TODO: add foundation icon fonts.
TODO: publish Grunt dist directory to webserver.
TODO: create Spring Boot app with JSON rest service.
TODO: create nodejs / express / mongo app with rest service (MEAN stack).
TODO: add AngularJS and invoke rest services.

Question: should we use jquery and modernizr from foundation or the separate installed ones? pro/cons.
