
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
    , min = this.min() - step
    , max = this.max()
    , array = [];

  while ((min = min + step) <= max) {
    array[array.length] = min;
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

  while ((min = min + step) <= max) {
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
