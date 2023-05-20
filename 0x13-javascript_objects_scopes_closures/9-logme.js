#!/usr/bin/node

// A function loging the number of args passsed through a file

let counter = 0;
exports.logMe = function (item) {
  console.log(`${counter}: ${item}`);
  counter++;
};
