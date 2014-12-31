'use strict';
var test = require('ava');
var jsonValue = require('./');

test(function (t) {
  var json = {
    foo: '123',
    bar: {
      name: 'ruan',
      age: 12
    }
  };
  t.assert(jsonValue(json, 'bar.name') === 'ruan');
  t.assert(jsonValue(json, 'foo') === '123');
});
