#!/usr/bin/node

/* A script that concats CLI arguments */

const x = process.argv;

if (x.length === 3) {
  console.log(x[2] + ' ' + 'is' + ' ' + 'undefined');
} else if (x.length === 4) {
  console.log(x[2] + ' ' + 'is' + ' ' + x[3]);
} else {
  console.log('undefined is undefined');
}
