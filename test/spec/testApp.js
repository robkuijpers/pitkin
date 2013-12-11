/*global describe, it */
'use strict';
(function () {

  var app;
  var name;
  
  beforeEach(function(done){
    app = new App();
    name = 'rob';
  })

  describe('sayHello', function(){
    it('should return Hello <name>', function(){
      app.sayHello(name).should.equal('Hello rob');
    })
  })
  
  describe('sayBye', function(){
    it('should return Bye <name>', function(){
      app.sayHello(name).should.equal('Bye rob');
    })
  })
  
})