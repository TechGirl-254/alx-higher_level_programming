#!/usr/bin/node
const myLen = process.argv[2];
if (!myLen) {
  console.log('No argument');
} else {
  console.log(myLen);
}
