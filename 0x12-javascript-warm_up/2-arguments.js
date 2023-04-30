#!/usr/bin/node

const x = process.argv;
const y = x.length;

if (y <= 2) {
  console.log('No argument');
} else if (y === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
