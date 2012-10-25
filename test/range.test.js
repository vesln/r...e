
/*!
 * Internal dependencies.
 */

var range = require('..');

describe('range', function() {
  it('can build a numeric range', function() {
    var actual = range(1, 3);
    actual.toArray().should.eql([1, 2, 3]);
  });

  it('can build a numeric range with step', function() {
    var actual = range(0, 10, 5);
    actual.toArray().should.eql([0, 5, 10]);
  });

  it('can build a range of letters', function() {
    var actual = null;

    actual = range('a', 'c');
    actual.toArray().should.eql(['a', 'b', 'c']);

    actual = range('A', 'C');
    actual.toArray().should.eql(['A', 'B', 'C']);
  });

  it('can build a range of letters with a step', function() {
    var actual = range('a', 'e', 2);
    actual.toArray().should.eql(['a', 'c', 'e']);
  });

  it('can tell if a value is included in the range', function() {
    var actual = null;

    actual = range(1, 3);
    actual.include(1).should.be.true;
    actual.include(2).should.be.true;
    actual.include(3).should.be.true;
    actual.include(4).should.be.false;

    actual = range('a', 'c');
    actual.include('a').should.be.true;
    actual.include('b').should.be.true;
    actual.include('c').should.be.true;
    actual.include('d').should.be.false;
  });

  it('can iterate over itself', function() {
    var actual = [];

    range(1, 3).each(function(n) {
      return actual.push(n);
    });

    actual.should.eql([1, 2, 3]);
  });

  it('can iterate over itself and return the result from each iteration', function() {
    var actual = range(1, 3).map(function(n) {
      return n * 2;
    });

    actual.should.eql([2, 4, 6]);
  });

  it('can join itself', function() {
    range(1, 2).join('').should.eq('12');
    range(1, 2).join().should.eq('1,2');
  });
});
