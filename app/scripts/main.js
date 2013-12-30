'use strict';

require.config({

    paths: {
        'angular'        : '../bower_components/angular/angular',
        'angular-route'  : '../bower_components/angular-route/angular-route',
        'angular-resoure': '../bower_components/angular-resource/angular-resource',
        'angular-mocks'  : '../bower_components/angular-mocks/angular-mocks',
        'fastclick'      : '../bower_components/foundation/js/vendor/fastclick',
        'jquery'         : '../bower_components/jquery/jquery',
        'foundation'     : '../bower_components/foundation/js/foundation'
    },
    shim: {
        'angular'         : { 'exports': 'angular' },
        'angular-route'   : { deps: ['angular'] },
        'angular-resource': { deps: ['angular'] },
        'angular-mocks'   : { deps: ['angular'], exports: 'angular.mock'},
        'hello'           : { deps: ['angular'] },
        'foundation'      : { deps: ['jquery', 'fastclick'], exports: 'Foundation' }
    }
});

// http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
    'app',
    'jquery',
    'angular',
    'hello',
    'foundation'
], function (app, $, angular) {

    // Defferred bootstrap to load extra modules.
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element(document).ready(function() {
      angular.module('myApp', []);
      angular.resumeBootstrap([]);
    });

    $(document).foundation();

    app.sayHello('test');
});
