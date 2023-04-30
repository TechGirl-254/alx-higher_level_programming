#!/usr/bin/node

/* A script that tests whether CLI arguements are integers */

let x = process.argv;

if (parseInt(x[2]) !== NaN) {
	console.log("My number:" + ' ' + x[2]);
} else {
	console.log("Not a number");
}
