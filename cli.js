#!/usr/bin/env node
'use strict';
var meow = require('meow');
var gitTails = require('./');

meow({
  help: [
    'Usage',
    '  git-tails',
  ]
});

gitTails(function(err, data) {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }

  console.log(data.join('\n'));
});
