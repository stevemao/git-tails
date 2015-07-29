'use strict';
var exec = require('child_process').exec;

var cmd = 'git rev-list --parents HEAD | egrep "^[a-f0-9]{40}$"';

module.exports = function(cb) {
  if (typeof cb !== 'function') {
    throw new TypeError('Expected a callback');
  }

  exec(cmd, function(err, data) {
    if (err) {
      cb(err);
      return;
    }

    var tails = data.trim().split('\n');

    cb(null, tails);
  });
};
