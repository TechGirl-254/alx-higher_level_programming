#!/usr/bin/node

// Reordering a dictionary from key:value to value:key

const dict = require('./101-data').dict;

const array = Object.values(dict);

const newDict = array.map(function (key, value) { return (value + [key]); });
console.log(`${newDict.value}: ${key}`);
