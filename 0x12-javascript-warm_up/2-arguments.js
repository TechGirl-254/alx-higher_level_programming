#!/usr/bin/node

let x = process.argv;
let y = x.length;

if (y <= 2) {
	console.log("No argument")
} else if (y === 3) {
	console.log("Argument found");
} else {
	console.log("Arguments found");
}
