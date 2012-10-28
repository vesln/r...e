var folio = require('folio');

folio('range')
  .root(__dirname, '..')
  .use(folio.requires())
    .dir('./lib')
    .package('range')
    .entry('./range.js')
    .pop()
  .use(folio.indent())
    .line('  ')
    .pop()
  .use(folio.indent())
    .line('  ')
    .pop()
  .use(folio.wrapper())
    .prefix([
        '!function (name, context, definition) {'
      , '  if (typeof require === \'function\' && typeof exports === \'object\' && typeof module === \'object\') {'
      , '    module.exports = definition();'
      , '  } else if (typeof define === \'function\' && typeof define.amd  === \'object\') {'
      , '    define(function () {'
      , '      return definition();'
      , '    });'
      , '  } else {'
      , '    context[name] = definition();'
      , '  }'
      , '}(\'range\', this, function () {\n'
    ].join('\n'))
    .suffix([
        '\n  return require(\'range\');'
      , '});'
    ].join('\n'))
    .pop()
  .use(folio.save())
    .file('./range.js')
    .pop()
  .use(folio.minify())
    .pop()
  .use(folio.save())
    .file('./range.min.js')
    .pop()
  .compile();
