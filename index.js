'use strict';
var exec = require('child_process').exec;

var cmd = 'git rev-list --parents HEAD';

module.exports = function(cb) {
  if (typeof cb !== 'function') {
    throw new TypeError('Expected a callback');
  }

  exec(cmd, {
    maxBuffer: Infinity
  }, function(err, data) {
    if (err) {
      cb(err);
      return;
    }

    var tails = data.match(/^[a-f0-9]{40}$/gm);

    cb(null, tails);
  });
};
