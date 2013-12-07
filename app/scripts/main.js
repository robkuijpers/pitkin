require.config({
  paths: {
    jquery: '../bower_components/jquery/jquery',
    f:      '../bower_components/foundation/js'
  },
  shim: {
    "../bower_components/foundation/js/foundation" : { deps: ["jquery"], exports: "Foundation" },
    "../bower_components/foundation/js/foundation/foundation.abide": { deps: ["jquery", "foundation"] },
    "../bower_components/foundation/js/foundation/foundation.accordion": { deps: ["jquery", "foundation"] },
    "../bower_components/foundation/js/foundation/foundation.alert": { deps: ["jquery", "foundation"] },
    "../bower_components/foundation/js/foundation/foundation.clearing": { deps: ["jquery", "foundation"] },
    "../bower_components/foundation/js/foundation/foundation.dropdown": { deps: ["jquery", "foundation"] },
    "../bower_components/foundation/js/foundation/foundation.interchange": { deps: ["jquery", "foundation"] },
    "../bower_components/foundation/js/foundation/foundation.joyride": { deps: ["jquery", "foundation"] },
    "../bower_components/foundation/js/foundation/foundation.magellan": { deps: ["jquery", "foundation"] },
    "../bower_components/foundation/js/foundation/foundation.offcanvas": { deps: ["jquery", "foundation"] },
    "../bower_components/foundation/js/foundation/foundation.orbit": { deps: ["jquery", "foundation"] },
    "../bower_components/foundation/js/foundation/foundation.reveal": { deps: ["jquery", "foundation"] },
    "../bower_components/foundation/js/foundation/foundation.tab": { deps: ["jquery", "foundation"] },
    "../bower_components/foundation/js/foundation/foundation.tooltip": { deps: ["jquery", "foundation"] },
    "../bower_components/foundation/js/foundation/foundation.topbar": { deps: ["jquery", "foundation"] }
  }
});

require([
  'app',
  'jquery',
  "f/foundation",
  "f/foundation/foundation.abide",
  "f/foundation/foundation.accordion",
  "f/foundation/foundation.alert",
  "f/foundation/foundation.clearing",
  "f/foundation/foundation.dropdown",
  "f/foundation/foundation.interchange",
  "f/foundation/foundation.joyride",
  "f/foundation/foundation.magellan",
  "f/foundation/foundation.offcanvas",
  "f/foundation/foundation.orbit",
  "f/foundation/foundation.reveal",
  "f/foundation/foundation.tab",
  "f/foundation/foundation.tooltip",
  "f/foundation/foundation.topbar"
], function (app, $) {
  $(document).foundation();
  app.sayHello('test');
});
