[![Build Status](https://secure.travis-ci.org/vesln/r...e.png)](http://travis-ci.org/vesln/r...e)

# r...e

Range implementation for Node.js

## Synopsis

```js
var range = require('r...e');
```

### Numeric range

```js
range(1, 3).toArray();
range('1..3').toArray();

// => [1, 2, 3]
```

### Alpha range

```js
range('a', 'c').toArray();

// => ['a', 'b', 'c']
```

### Steps

```js
range(0, 10, 5).toArray();

// => [0, 5, 10]
```

### #include

```js
range(1, 3).include(2);

// => true

range(1, 3).include(4);

// => false
```

### #map

```js
range(1, 3).map(function(n) {
  return n;
});

// => [1, 2, 3]
```

### #each

```js
range(1, 3).each(function(n) {
  console.log(n);
});

// => 1
// => 2
// => 3
```

### #join

```js
range(1, 2).join('');
range(1, 2).join();

// => '12'
// => '1,2'
```

### #equal

```js
range(1, 2).equal(range(1, 2));
range(1, 2, 1).equal(range(1, 2, 2));

// => true
// => false
```

### #sum

```js
range(1, 3).sum();

// => 6
```

### #min

```js
range().min(1).min();

// => 1
```

### #max

```js
range().max(3).max();

// => 3
```

### #step

```js
range().step(1).step();

// => 1
```

## Installation

Node.js:

```
$ npm install r...e
```

Browser:

Download `range.min.js`, it's all you need.

```html
<script src="range.min.js"></script>
```

## Tests

Node.js:

```
$ npm install
$ make test
```

Browser:

- Clone the repository
- Open `test/browser/index.html` in your favourite browser

## TODO

- Handle floats

## License

(The MIT License)

Copyright (c) 2012 Veselin Todorov <hi@vesln.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
