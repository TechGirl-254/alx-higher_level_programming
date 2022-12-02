#!/usr/bin/node
const x = process.argv[2];
const y = isNaN(x);
let i = 1;
if (!x || y) {
  console.log('Missing number of occurrences');
} else {
    while (i <= x) {
      console.log('C is fun');
      i++;
    }
}
