'use strict';
var assert = require('assert');
var gitTails = require('../');
var mockGit = require('mock-git');
var unmock;

it('should throw if no callback', function() {
  assert.throws(gitTails);
});

it('should callback with error', function(done) {
  mockGit('throw new Error("Suck it")', 'rev-list')
    .then(function(_unmock_) {
      unmock = _unmock_;

      gitTails(function(err) {
        assert.ok(err);
        done();
      });
    });
});

it('should get the first commit', function(done) {
  unmock();
  gitTails(function(err, data) {
    assert.deepEqual(data, ['9594829e694c5284ab6ef3816ded02ca104fee59']);
    done();
  });
});
