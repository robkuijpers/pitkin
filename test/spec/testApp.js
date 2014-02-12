
expect = (chai && chai.expect) || require('chai').expect;

describe('sayHello and sayBye', function(){
    
    var myApp;
    
    beforeEach(function(done) {
      require(['app'], function(App) {
        myApp = App;
        done();
      });
    });
    
    it('should return Hello <name>', function(){
      chai.assert.equal(myApp.sayHello('rob'), 'Hello rob');
    })

    it('should return Bye <name>', function(){
      chai.assert.equal(myApp.sayBye('rob'), 'Bye rob');
    })
       
    
 it('Should be 42; Sinon stub.', function() {
    // Stub myApp.saHello to return 'boe', no matter what.
    myApp.sayHello = sinon.stub().returns('boe');
    chai.assert.equal(myApp.sayHello('rob'), 'boe');
  });
    
})


describe('Give it some context', function () {
  
  describe('maybe a bit more context here', function () {
    it('should run here few assertions', function () {
      expect([1,2,3]).to.have.length(3);
    });
  });
    
});

