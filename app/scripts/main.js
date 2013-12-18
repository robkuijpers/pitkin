'use strict';

require.config({

    paths: {
        'angular': '../bower_components/angular/angular',
//        'angularRoute': '../../bower_components/angular-route/angular-route',
//        'angularMocks': '../../bower_components/angular-mocks/angular-mocks',

        'jquery' : '../bower_components/jquery/jquery',
        'fd'     : '../bower_components/foundation/js'
    },
    shim: {
        'angular'     : { 'exports': 'angular' },
//      'angularRoute': { deps: ['angular'] },
//      'angularMocks': { deps: ['angular'], 'exports': 'angular.mock'},
        'hello'       : { deps: ['angular'] },
        '../bower_components/foundation/js/foundation': { deps: ['jquery'] },
        '../bower_components/foundation/js/foundation/foundation.abide': { deps: ['jquery', 'foundation'] },
        '../bower_components/foundation/js/foundation/foundation.accordion': { deps: ['jquery', 'foundation'] },
        '../bower_components/foundation/js/foundation/foundation.alert': { deps: ['jquery', 'foundation'] },
        '../bower_components/foundation/js/foundation/foundation.clearing': { deps: ['jquery', 'foundation'] },
        '../bower_components/foundation/js/foundation/foundation.dropdown': { deps: ['jquery', 'foundation'] },
        '../bower_components/foundation/js/foundation/foundation.interchange': { deps: ['jquery', 'foundation'] },
        '../bower_components/foundation/js/foundation/foundation.joyride': { deps: ['jquery', 'foundation'] },
        '../bower_components/foundation/js/foundation/foundation.magellan': { deps: ['jquery', 'foundation'] },
        '../bower_components/foundation/js/foundation/foundation.offcanvas': { deps: ['jquery', 'foundation'] },
        '../bower_components/foundation/js/foundation/foundation.orbit': { deps: ['jquery', 'foundation'] },
        '../bower_components/foundation/js/foundation/foundation.reveal': { deps: ['jquery', 'foundation'] },
        '../bower_components/foundation/js/foundation/foundation.tab': { deps: ['jquery', 'foundation'] },
        '../bower_components/foundation/js/foundation/foundation.tooltip': { deps: ['jquery', 'foundation'] },
        '../bower_components/foundation/js/foundation/foundation.topbar': { deps: ['jquery', 'foundation'] }
    },
    priority: [ 'angular' ]
});

// http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
    'app',
    'jquery',
    'angular',
    'hello',
    'fd/foundation',
    'fd/foundation/foundation.abide',
    'fd/foundation/foundation.accordion',
    'fd/foundation/foundation.alert',
    'fd/foundation/foundation.clearing',
    'fd/foundation/foundation.dropdown',
    'fd/foundation/foundation.interchange',
    'fd/foundation/foundation.joyride',
    'fd/foundation/foundation.magellan',
    'fd/foundation/foundation.offcanvas',
    'fd/foundation/foundation.orbit',
    'fd/foundation/foundation.reveal',
    'fd/foundation/foundation.tab',
    'fd/foundation/foundation.tooltip',
    'fd/foundation/foundation.topbar',
    'fd/vendor/fastclick',
    'fd/vendor/placeholder',
    'fd/vendor/jquery.autocomplete',
    'fd/vendor/jquery.cookie'
], function (app, $, angular) {

    // Defferred bootstrap to load extra modules.
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element(document).ready(function() {
      var myApp = angular.module('myApp', []);
      //angular.resumeBootstrap($html.get(0),['myApp']);
      angular.resumeBootstrap(['myApp']);
    });

    $(document).foundation();

  app.sayHello('test');
});
