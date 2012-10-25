[![Build Status](https://secure.travis-ci.org/vesln/r...e.png)](http://travis-ci.org/vesln/r...e)

# r...e

## Synopsis

```js
var range = require('r...e');
```

### Numeric range

```js
var actual = range(1, 3);
actual.toArray();

// => [1, 2, 3]
```

### Alpha range

```js
var actual = range('a', 'c');
actual.toArray();

// => ['a', 'b', 'c']
```

### Steps

```js
var actual = range(0, 10, 5);
actual.toArray();

// => [0, 5, 10]
```

## Requirements

- Node.js >= 0.6.0

## Tests

```
$ npm install
$ make test
```

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
