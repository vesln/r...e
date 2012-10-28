
/**
 * External dependencies.
 */

var chai = chai || require('chai');

/**
 * Register `should`.
 */

global.should = chai.should();

/**
 * Include stack traces.
 */

chai.Assertion.includeStack = true;
