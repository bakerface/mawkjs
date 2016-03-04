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

var mawk = require('..');

require('should');

describe('mawk.args(fn)', function() {
  it('should return an empty list if the function is undefined', function() {
    mawk.args().should.eql([]);
  });

  it('should return an empty list if the function is invalid', function() {
    mawk.args('invalid').should.eql([]);
  });

  it('should return an empty list if there are no arguments', function() {
    function zero() {

    }

    mawk.args(zero).should.eql([]);
  });

  it('should return an argument list if there are arguments', function() {
    function three(a, b, c) {
      return a + b + c;
    }

    mawk.args(three).should.eql([
      'a', 'b', 'c'
    ]);
  });
});
