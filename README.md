json-value
========
[![build status](https://secure.travis-ci.org/ruanyl/json-value.svg)](http://travis-ci.org/ruanyl/json-value)
[![NPM version](https://badge.fury.io/js/json-value.svg)](http://badge.fury.io/js/json-value)

retrieve value from json with a given keys string "foo.bar.val"

## Installation

This module is installed via npm:

``` bash
$ npm install json-value
```

## Example Usage

``` js
var jsonValue = require('json-value');

var json = {
  foo: '123',
  bar: {
    name: 'ruan',
    age: 12
  }
};

jsonValue(json, 'bar.name'); //shoud be 'ruan'
```
