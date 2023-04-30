#!/usr/bin/node

/* A script that prints multiple lines using a loop */

const x = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
let y = 0;

while (y < x.length) {
  console.log(x[y]);
  y += 1;
}
