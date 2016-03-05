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
var should = require('should');

function three(one, two) {
  return one + two;
}

describe('mawk.factory(name, value)', function() {
  beforeEach(function() {
    mawk('one').as(1);
    mawk('two').as(2);
    mawk('three').factory(three);
  });

  it('should return undefined if the name does not exist', function() {
    should(mawk.resolve('four')).not.be.ok();
  });

  it('should resolve simple values', function() {
    mawk.resolve('one').should.eql(1);
    mawk.resolve('two').should.eql(2);
  });

  it('should resolve factory functions', function() {
    mawk.resolve('three').should.eql(3);
  });
});
