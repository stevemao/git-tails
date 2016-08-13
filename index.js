'use strict';
var childProcess = require('child_process');

var cmd = 'git rev-list --parents HEAD';

module.exports = function(cb) {
  if (typeof cb !== 'function') {
    throw new TypeError('Expected a callback');
  }

  childProcess.exec(cmd, {
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

module.exports.sync = function() {
  var data = childProcess.execSync(cmd);

  return data.toString().match(/^[a-f0-9]{40}$/gm);
};
