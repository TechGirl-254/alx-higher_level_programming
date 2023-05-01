#!/usr/bin/node

/* A script that prints factorials */

function factorial (a) {
  if (isNaN(a) === true) {
    return 1;
  } else {
    if (a === 1 || a === 0) {
      return 1;
    } else {
      return a * factorial(a - 1);
    }
  }
}
console.log(factorial(parseInt(process.argv[2])));
