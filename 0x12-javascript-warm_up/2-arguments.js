#!/usr/bin/node
const len = process.argv;
if (len.length < 3) {
  console.log('No argument');
} else if (len.length === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
console.log('\n');
