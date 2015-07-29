'use strict';
var assert = require('assert');
var gitTails = require('../');

it('should throw if no callback', function() {
  assert.throws(gitTails);
});

it('should get the first commit', function(done) {
  gitTails(function(err, data) {
    assert.deepEqual(data, ['']);
    done();
  });
});
