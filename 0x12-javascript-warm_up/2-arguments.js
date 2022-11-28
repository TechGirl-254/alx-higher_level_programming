#!/usr/bin/node
let len = process.argv;
if (len.length < 3){
	console.log("No argument\n");
} else if (len.length === 3){
	console.log("Argument found\n");
} else{
	console.log("Arguments found\n");
}
