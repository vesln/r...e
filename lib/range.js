
/*!
 * Sequences.
 */

var sequence = 'abcdefghijklmnopqrstuvwxyz'
  , sequenceUpper = sequence.toUpperCase()
  , sequence = sequence.split('')
  , sequenceUpper = sequenceUpper.split('');

/**
 * Range constructor.
 *
 * @param {Number|String} min
 * @param {Number|String} max
 * @param {Number} step
 * @constructor
 */

function Range(min, max, step) {
  var scope = null
    , re = /^([A-Za-z]|\d+)\.{2}([A-Za-z]|\d+)$/;

  if (typeof min === 'string' && min.match(re)) {
    step = max;
    scope = min.split('..');
    min = cast(scope[0]);
    max = cast(scope[1]);
  }

  this.min(min);
  this.max(max);
  this.step(step);
};

/**
 * Min accessor.
 *
 * @param {Number|String} value
 * @returns {Range|Number|String} `this` or the value
 * @api public
 */

Range.prototype.min = function(min) {
  if (arguments.length === 0) {
    return this._min;
  }

  this._min = min;
  return this;
};

/**
 * Max accessor.
 *
 * @param {Number|String} value
 * @returns {Range|Number|String} `this` or the value
 * @api public
 */

Range.prototype.max = function(max) {
  if (arguments.length === 0) {
    return this._max;
  }

  this._max = max;
  return this;
};

/**
 * Step accessor. Default to 1.
 *
 * @param {Number} value
 * @returns {Range|Number} `this` or the value
 * @api public
 */

Range.prototype.step = function(step) {
  if (arguments.length === 0) {
    return this._step;
  }

  this._step = step === void 0 ? 1 : step;
  return this;
};

/**
 * Range to array.
 *
 * @returns {Array}
 * @api public
 */

Range.prototype.toArray = function() {
  return typeof this.min() === 'number'
    ? this.numericArray()
    : this.alphaArray();
};

/**
 * Build an array from numeric range.
 *
 * @returns {Array}
 * @api private
 */

Range.prototype.numericArray = function() {
  var step = this.step()
    , min = this.min()
    , max = this.max()
    , isFloat = typeof min === 'float'
    , array = [];

  while (min <= max) {
    array[array.length] = min;
    min += step;
  }

  return array;
};

/**
 * Build an array from alpha range.
 *
 * @returns {Array}
 * @api private
 */

Range.prototype.alphaArray = function() {
  var step = this.step()
    , first = this.min()
    , min = null
    , max = null
    , base = null
    , array = [];

  base = first === first.toUpperCase()
    ? sequenceUpper
    : sequence;

  min = base.indexOf(first) - step;
  max = base.indexOf(this.max());

  while ((min += step) <= max) {
    array[array.length] = base[min];
  }

  return array;
};

/**
 * Check if the supplied value is an element
 * of the range.
 *
 * @param {String|Number} value
 * @returns {Boolean}
 * @api public
 */

Range.prototype.include = function(value) {
  return !!~this.toArray().indexOf(value);
};

/**
 * Each.
 *
 * @param {Function} callback
 * @api public
 */

Range.prototype.each = function(fn) {
  this.toArray().forEach(fn);
};

/**
 * Map.
 *
 * @param {Function} callback
 * @returns {Array}
 * @api public
 */

Range.prototype.map = function(fn) {
  return this.toArray().map(fn);
};

/**
 * Join.
 *
 * @param {String} separator, default to ','
 * @returns {String}
 * @api public
 */

Range.prototype.join = function(sep) {
  sep = sep === void 0 ? ',' : sep;
  return this.toArray().join(sep);
};

/**
 * Check if the current range is equal to
 * another range.
 *
 * @param {Range} range
 * @returns {Boolean}
 * @api public
 */

Range.prototype.equal = function(range) {
  return this.min() === range.min()
    && this.max() === range.max()
    && this.step() === range.step();
};

/**
 * Sum the given range.
 *
 * @returns {Number}
 * @api public
 */

Range.prototype.sum = function() {
  var total = 0;

  this.each(function(n) {
    total += n;
  });

  return total;
};

/*!
 * Simple cast helper.
 *
 * @param {String|Number} n
 * @returns {String|Number}
 * @api private
 */

function cast(n) {
  if (n == +n) return +n;
  return n;
};

/**
 * Create a range.
 *
 * @param {Number|String} min
 * @param {Number|String} max
 * @param {Number} step
 * @api public
 */

module.exports = function(min, max, step) {
  return new Range(min, max, step);
};

/*!
 * Expose `Range`.
 */

module.exports.Range = Range;
