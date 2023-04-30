#!/usr/bin/node

/* A script that tests whether CLI arguements are integers */

const x = process.argv;

if (isNaN(x[2]) === false) {
  console.log('My number:' + ' ' + x[2]);
} else {
  console.log('Not a number');
}
