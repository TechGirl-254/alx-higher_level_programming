#!/usr/bin/node
const myArg = process.argv;
const myArg2 = process.argv[2];
if (!myArg2) {
  console.log('Not a number');
}
let i = 0;
while (myArg[i]) {
  else {
    if (isNaN(myArg[i])) {
      console.log('Not a number');
    } else {
      console.log('My number:', myArg[i]);
    }
  }
  i++;
}
