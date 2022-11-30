#!/usr/bin/node
const myArg1 = process.argv[2];
const myArg2 = process.argv[3];
if (myArg1 && myArg2) {
	console.log(myArg1, 'is', myArg2);
}
