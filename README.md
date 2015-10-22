Parse
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Attempts to parse an input string according to the [.properties](https://en.wikipedia.org/wiki/.properties) specification.


## Installation

``` bash
$ npm install utils-properties-parse
```


## Usage

``` javascript
var parse = require( 'utils-properties-parse' );
```

#### parse( value[, options] )

Attempts to parse an input `string` according to the [.properties](https://en.wikipedia.org/wiki/.properties) specification.

``` javascript
var out = parse( 'beep boop' );
// returns {'beep':'boop'}

out = parse( '[beep boop', {
	'sections': true
});
// returns <Error>
```

The `function` signature is the same as [properties#parse](https://github.com/gagle/node-properties#parse), except the `path` and `include` options are __not__ supported.


## Notes

*	This `function` wraps [properties#parse](https://github.com/gagle/node-properties#parse) in a `try/catch` block.
*	The presence of `try/catch` within any `function` prevents JavaScript compiler optimization. By isolating the `try/catch` block, we minimize the extent of optimization hell.


## Examples

``` javascript
var fs = require( 'fs' ),
	path = require( 'path' ),
	parse = require( 'utils-properties-parse' );

// Load a .properties file...
var file = '/path/to/file.properties';
file = fs.readFileSync( file, {
	'encoding': 'utf8'
});

// Attempt to parse the file...
file = parse( file );
console.dir( file );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-properties-parse.svg
[npm-url]: https://npmjs.org/package/utils-properties-parse

[travis-image]: http://img.shields.io/travis/kgryte/utils-properties-parse/master.svg
[travis-url]: https://travis-ci.org/kgryte/utils-properties-parse

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/utils-properties-parse/master.svg
[codecov-url]: https://codecov.io/github/kgryte/utils-properties-parse?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-properties-parse.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-properties-parse

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-properties-parse.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-properties-parse

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-properties-parse.svg
[github-issues-url]: https://github.com/kgryte/utils-properties-parse/issues
