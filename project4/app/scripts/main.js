require.config({
    paths: {
        jquery:     '../bower_components/foundation/js/vendor/jquery',
        foundation: '../bower_components/foundation/js/foundation/foundation'
    },
    shim: {
        foundation: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'foundation'], function (app, $, foundation) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});