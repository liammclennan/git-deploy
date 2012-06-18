describe('config', function () {
    var config = require('../lib/config'),
        should = require('should');

    it('should exist', function () {
        should.exist(config);                
    });

    describe('validation', function () {

        describe('correct pathToRepo', function () {
            before(function () {
                config.data = {
                    pathToRepo: './' // is a git repo
                };
            });
        
            it('should validate', function () {
                config.validate();                    
            });    
        
        });

        describe('wrong pathToRepo', function () {
            before(function () {
                config.data = {
                    pathToRepo: './test' // not a git repo
                };
            });
        
            it('should fail validate', function () {
                (function () {
                    config.validate();   
                }).should.throw();
            });    
        
        });      
    
    });
    
});
