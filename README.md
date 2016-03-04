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

### mawk.args(fn)
[![version](https://img.shields.io/badge/version-0.0.0-green.svg)](#mawkargsfn)
[![stability](https://img.shields.io/badge/stability-experimental-orange.svg)](#mawkargsfn)

Returns the argument names for the function `fn` as an array of strings.

``` javascript
var mawk = require('mawk');

function sum(a, b) {
  return a + b;
}

mawk.args(sum);
// => [ 'a', 'b' ]
```
