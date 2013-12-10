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

Add foundation-icon font: download, create a fonts/foundation-icons directory in /styles, rename fondation-icons.css to _foundation-icons.scss, edit src url to point to the fonts (!!! this file is included in main.scss so all links are relative to main.scss).

  @font-face {
    font-family: "foundation-icons";
    src: url("./fonts/foundation-icons/foundation-icons.eot");
    src: url("./fonts/foundation-icons/foundation-icons.eot?#iefix") format("embedded-opentype"),
         url("./fonts/foundation-icons/foundation-icons.woff") format("woff"),
         url("./fonts/foundation-icons/foundation-icons/foundation-icons.ttf") format("truetype"),
         url("./fonts/foundation-icons/foundation-icons.svg#fontcustom") format("svg");
    font-weight: normal;
    font-style: normal;
  }

Add include to main.scss

  @import "./fonts/foundation-icons/foundation-icons";
  
Create a dist build and copy it to the webserver:

  grunt dist

Note: add "devel": true to .jshint.rc if you dont't want warnings for alert and console.

----------------------------

TODO: add my photo to linkedin and update, github, whatsapp.
TODO: add gui tests with headless browser.
TODO: create Spring Boot app with JSON rest service and mongodb
TODO: create nodejs / express / mongodb app with rest service (MEAN stack).
TODO: add AngularJS and invoke rest services.

Notes:
  - use separate modernizr: (1) its included in the generator, (2) has all options included, (3) needs to be on top anyway so cannot load with requirejs, (4) easy upgrade with bower.json.
  - use separate jquery: (1) included in generator, easy upgrade with bower.json to latest version.
