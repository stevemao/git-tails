#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status][coverall-image]][coverall-url]

> Get git tail hashes from your repository in reverse chronological order

Because you want to do something similar to `git show HEAD` and you find out that there is no `git show TAIL`. Reason being there might be more than one tails in your git repository.


## Install

```sh
$ npm install --save git-tails
```


## Usage

```js
var gitTails = require('git-tails');

gitTails(function(err, data) {
  console.log(data);
  //=> ['0cd33254f2df29272323dca4f052be70d9659174']
});
```

```sh
$ npm install --global git-tails
$ git-tails
0cd33254f2df29272323dca4f052be70d9659174
```

To get the earliest tail you just need to do

```js
gitTails(function(err, data) {
  console.log(data[data.length - 1]);
  //=> '0cd33254f2df29272323dca4f052be70d9659174'
});
```

If you know there is only one tails you could do

```sh
$ git show `git-tails`
```

Just like `git show HEAD`.


## License

MIT © [Steve Mao](https://github.com/stevemao)


[npm-image]: https://badge.fury.io/js/git-tails.svg
[npm-url]: https://npmjs.org/package/git-tails
[travis-image]: https://travis-ci.org/stevemao/git-tails.svg?branch=master
[travis-url]: https://travis-ci.org/stevemao/git-tails
[daviddm-image]: https://david-dm.org/stevemao/git-tails.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/stevemao/git-tails
[coverall-image]: https://coveralls.io/repos/stevemao/git-tails/badge.svg
[coverall-url]: https://coveralls.io/r/stevemao/git-tails
