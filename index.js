/**
 * Copyright (c) 2016 Christopher M. Baker
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

var R_LINE_COMMENTS = /\/\/.*$/g;
var R_BLOCK_COMMENTS = /\/\*[\s\S]*?\*\//g;
var R_FUNCTION_ARGS = /function[^\(]*\(([^\)]*)\)/;
var R_COMMA = /\s*,\s*/g;

var mawk = module.exports = { };

mawk.FunctionUndefinedError = function() {
  Error.captureStackTrace(this, this.constructor);
  this.name = 'FunctionUndefinedError';
  this.message = 'A function must be defined.';
};

mawk.FunctionInvalidError = function() {
  Error.captureStackTrace(this, this.constructor);
  this.name = 'FunctionInvalidError';
  this.message = 'A valid function must be defined.';
};

mawk.args = function(fn) {
  if (typeof fn === 'undefined') {
    throw new mawk.FunctionUndefinedError();
  }

  if (typeof fn !== 'function') {
    throw new mawk.FunctionInvalidError();
  }

  var match = fn.toString()
    .replace(R_LINE_COMMENTS, '')
    .replace(R_BLOCK_COMMENTS, '')
    .match(R_FUNCTION_ARGS)[1];

  if (match) {
    return match.split(R_COMMA);
  }

  return [];
};
