#!/usr/bin/node

/* A script that searches for the 2nd largest number in a list. */

function findnumber (a) {
  if (a.length > 3) {
    const x = a.sort();
    console.log(x[(x.length - 2)]);
  } else {
    console.log(0);
  }
}
console.log(findnumber(process.argv));
