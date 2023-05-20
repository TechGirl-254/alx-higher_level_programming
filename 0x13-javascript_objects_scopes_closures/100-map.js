#!/usr/bin/node

// using the map array method

const list = require('./100-data').list;
const newArray = list.map(function (currentValue, index) {
  return currentValue * index;
});
console.log(list);
console.log(newArray);
