#!/usr/bin/node
const myArg = process.argv;
let i = 0;
while (myArg[i]) {
  if (i < 2) {
    console.log('Not a number');
  } else {
    if (isNaN(myArg[i])) {
      console.log('Not a number');
    } else {
      console.log('My number:', myArg[i]);
    }
  }
  i++;
}
