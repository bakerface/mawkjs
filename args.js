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

var N_ARGS_INDEX = 1;
var R_BLOCK_COMMENTS = /\/\*[\s\S]*?\*\//g;
var R_COMMA = /\s*,\s*/g;
var R_FUNCTION_ARGS = /function[^\(]*\(([^\)]*)\)/;
var R_LINE_COMMENTS = /\/\/.*$/g;

module.exports = function(fn) {
  var match = String(fn)
    .replace(R_LINE_COMMENTS, '')
    .replace(R_BLOCK_COMMENTS, '')
    .match(R_FUNCTION_ARGS);

  if (match && match[N_ARGS_INDEX]) {
    return match[N_ARGS_INDEX].split(R_COMMA);
  }

  return [];
};
