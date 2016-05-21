var expect = require('chai').expect;
var request = require('request');
var server = require('gulp-express');

before(function () {
  // Start server before testing
  server.run(['server.js']);
});

describe('Number conversions', function () {
  it('100 should return "one hundred"', function (done) {
    request.get('http://localhost:8080/convert/100', function (err, res, body) {
      var response = JSON.parse(body);
      expect(response.word).to.equal('one hundred');
      done();
    });
  });

  it('1000 should return "one thousand"', function (done) {
    request.get('http://localhost:8080/convert/1000', function (err, res, body) {
      var response = JSON.parse(body);
      expect(response.word).to.equal('one thousand');
      done();
    });
  });

  it('0 should return "zero"', function (done) {
    request.get('http://localhost:8080/convert/0', function (err, res, body) {
      var response = JSON.parse(body);
      expect(response.word).to.equal('zero');
      done();
    });
  });

  it('20 should return "twenty"', function (done) {
    request.get('http://localhost:8080/convert/20', function (err, res, body) {
      var response = JSON.parse(body);
      expect(response.word).to.equal('twenty');
      done();
    });
  });

  it('35 should return "thirty-five"', function (done) {
    request.get('http://localhost:8080/convert/35', function (err, res, body) {
      var response = JSON.parse(body);
      expect(response.word).to.equal('thirty-five');
      done();
    });
  });

  it('999 should return "nine hundred and ninety-nine"', function (done) {
    request.get('http://localhost:8080/convert/999', function (err, res, body) {
      var response = JSON.parse(body);
      expect(response.word).to.equal('nine hundred and ninety-nine');
      done();
    });
  });
  it('1002 should return "You must convert a number between 0 and 1000"', function (done) {
    request.get('http://localhost:8080/convert/1002', function (err, res, body) {
      var response = JSON.parse(body);
      expect(response.word).to.equal('You must convert a number between 0 and 1000');
      done();
    });
  });
  it('20563 should return "You must convert a number between 0 and 1000"', function (done) {
    request.get('http://localhost:8080/convert/20563', function (err, res, body) {
      var response = JSON.parse(body);
      expect(response.word).to.equal('You must convert a number between 0 and 1000');
      done();
    });
  });
  after(function () {
    // Stop server after testing
    server.stop();
  });
});