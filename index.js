'use strict';

var type = require('simple-type');

var keyValue = function(json, keys) {
  if(type(json) !== 'object') {
    throw new TypeError('Expected an Object for the first argument');
  }
  if(type(keys) !== 'string') {
    throw new TypeError('Expected a String for the second argument');
  }
  var val = json;
  keys.split('.').forEach(function(ele, i) {
    val = val[ele];
  });

  return val;
};

module.exports = keyValue;
