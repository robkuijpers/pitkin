/*global define */
define(["jquery"], function ($) {

    $(function() {
      alert('loaded');
      // $('body').css('background', 'blue');
    });

    function sayHello(name) {
       alert("Hello " + name);
       // $('body').css('background', 'blue');
    };

   return {
      sayHello: sayHello
    }

});
