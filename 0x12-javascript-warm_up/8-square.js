#!/usr/bin/node

/* A script that prints a square using a loop */

const x = process.argv;
let y = 1;
let z = 1;

if (isNaN(x[2]) === false) {
  while (y <= parseInt(x[2])) {
    while (z <= parseInt(x[2])) {
      console.log('X'.repeat(parseInt(x[2])));
      z += 1;
    }
    y += 1;
  }
} else {
  console.log('Missing size');
}
