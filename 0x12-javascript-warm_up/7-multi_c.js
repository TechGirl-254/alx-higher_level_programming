#!/usr/bin/node

const x = process.argv;
let y = 1;
if (isNaN(x[2]) === false) {
  while (y <= parseInt(x[2])) {
    console.log('C is fun');
    y += 1;
  }
} else {
  console.log('Missing number of occurrences');
}
