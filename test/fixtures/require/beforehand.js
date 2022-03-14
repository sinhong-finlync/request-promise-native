'use strict';

var request = require('@finlyncerp/request');
var rp = require('../../../');

var requestHasNoThen = request('http://localhost:4000/200').then === undefined;
var rpHasThen = rp('http://localhost:4000/200').then !== undefined;

console.log('request: ' + requestHasNoThen + ', rp: ' + rpHasThen);
