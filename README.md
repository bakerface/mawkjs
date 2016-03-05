# mawk
[![npm package](https://badge.fury.io/js/mawk.svg)](http://badge.fury.io/js/mawk)
[![build](https://travis-ci.org/bakerface/mawkjs.svg?branch=master)](https://travis-ci.org/bakerface/mawkjs)
[![code climate](https://codeclimate.com/github/bakerface/mawkjs/badges/gpa.svg)](https://codeclimate.com/github/bakerface/mawkjs)
[![coverage](https://codeclimate.com/github/bakerface/mawkjs/badges/coverage.svg)](https://codeclimate.com/github/bakerface/mawkjs/coverage)
[![issues](https://img.shields.io/github/issues/bakerface/mawkjs.svg)](https://github.com/bakerface/mawkjs/issues)
[![dependencies](https://david-dm.org/bakerface/mawkjs.svg)](https://david-dm.org/bakerface/mawkjs)
[![devDependencies](https://david-dm.org/bakerface/mawkjs/dev-status.svg)](https://david-dm.org/bakerface/mawkjs#info=devDependencies)
[![downloads](http://img.shields.io/npm/dm/mawk.svg)](https://www.npmjs.com/package/mawk)

#### Table of Contents
[#](#mawkargsfn) **mawk**.args(*fn*) - returns argument names for a function.
<br>
[#](#mawkasname-value) **mawk**.as(*name*, *value*) - create a mock from a value.
<br>
[#](#mawkrequirename) **mawk**.require(*name*) - create a mock from a module.
<br>
[#](#mawkresolvename) **mawk**.resolve(*name*) - returns the value of a mock.
<br>
[#](#mawksanitizename) **mawk**.sanitize(*name*) - returns a safe mock name.
<br>

### mawk.args(fn)
[![stability](https://img.shields.io/badge/stability-experimental-orange.svg)](#mawkargsfn)

Returns the argument names for the function `fn` as an array of strings.

``` javascript
var mock = require('mawk');

function sum(one, two) {
  return one + two;
}

mock.args(sum);
// => [ 'one', 'two' ]
```

### mawk.as(name, value)
[![stability](https://img.shields.io/badge/stability-experimental-orange.svg)](#mawkasname-value)

Creates a mock with specified `name` that resolves to the specified `value`.

``` javascript
var mock = require('mawk');

// pass name and value together
mock.as('one', 1);

// or pass name then value
mock('one').as(1);

mock.resolve('one');
// => 1
```

### mawk.require(name)
[![stability](https://img.shields.io/badge/stability-experimental-orange.svg)](#mawkrequirename)

Creates a mock from the module with specified `name`.

``` javascript
var mock = require('mawk');

// in production
mock.require('redis');

mock.resolve('redis');
// => require('redis')

// in development
mock('redis').require('fakeredis');

mock.resolve('redis');
// => require('fakeredis')
```

### mawk.resolve(name)
[![stability](https://img.shields.io/badge/stability-experimental-orange.svg)](#mawkresolvename)

Returns the value of the mock with the specified `name`.

``` javascript
var mock = require('mawk');

mock('one').as(1);
mock('two').as(2);

mock.resolve('one');
// => 1

mock.resolve('two');
// => 2
```

### mawk.sanitize(name)
[![stability](https://img.shields.io/badge/stability-experimental-orange.svg)](#mawksanitizename)

Returns a sanitized version of `name` suitable for use as a JavaScript function argument.

``` javascript
var mock = require('mawk');

mock.sanitize('express');
// => 'express'

mock.sanitize('!safe');
// => 'safe'

mock.sanitize('body-parser');
// => 'bodyParser'

mock.sanitize('@bakerface/mawkjs');
// => 'mawkjs'

mock.sanitize('/path/to/file.js');
// => 'file'
```
