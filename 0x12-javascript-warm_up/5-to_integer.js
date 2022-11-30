#!/usr/bin/node
const myArg2 = process.argv[2];
if (!myArg2) {
  console.log('Not a number');
} else {
    if (isNaN(myArg2)) {
      console.log('Not a number');
    } else {
      console.log('My number:', myArg2);
    }
  }
