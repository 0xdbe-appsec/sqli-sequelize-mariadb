const supertest = require("supertest");
const assert = require('assert');
const app = require("../app.js");

describe("User API", function() {
    it('should add Frodon Saque', function(done) {
      supertest(app)
        .post('/users')
        .send({"name":"Frodon ","password":"p4ssw0rD"})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
           if (err) return done(err);
           done();
        });
    });

});