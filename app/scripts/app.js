'use strict';

/*global define */
define(['jquery'], function ($) {

    $(function() {
        // alert('loaded');
        // $('body').css('background', 'blue');
    });

    function sayHello(name) {
        return('Hello ' + name);
        // $('body').css('background', 'blue');
    }

    function sayBye(name) {
        return('Bye ' + name);
        // $('body').css('background', 'blue');
    }

    return {
        sayHello: sayHello,
        sayBye  : sayBye
    };

});
