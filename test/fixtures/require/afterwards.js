'use strict';

var rp = require('../../../');
var request = require('@finlyncerp/request');

var rpHasThen = rp('http://localhost:4000/200').then !== undefined;
var requestHasNoThen = request('http://localhost:4000/200').then === undefined;

console.log('rp: ' + rpHasThen + ', request: ' + requestHasNoThen);
