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

var args = require('./args');
var as = require('./as');
var factory = require('./factory');
var _require = require('./require');
var resolve = require('./resolve');
var sanitize = require('./sanitize');

module.exports = function(name) {
  return {
    args: args.bind(module.exports),
    as: as.bind(module.exports, name),
    dependencies: module.exports.dependencies,
    factory: factory.bind(module.exports, name),
    require: _require.bind(module.exports, name),
    resolve: resolve.bind(module.exports),
    sanitize: sanitize.bind(module.exports)
  };
};

module.exports.args = args;
module.exports.as = as;
module.exports.dependencies = { };
module.exports.factory = factory;
module.exports.require = _require;
module.exports.resolve = resolve;
module.exports.sanitize = sanitize;
