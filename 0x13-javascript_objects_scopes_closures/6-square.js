#!/usr/bin/node
const Rectangle = require("./5-square");

class Square extends Rectangle {
    constructor (size) {
        super(size, size);
    }
    charPrint (c) {
        if (!c) {
            c = 'X';
        }
            let i = 1;
            while (i <= this.height) {
                console.log(c.repeat(this.width));
                i++;
            }
    }
}
module.exports = Square;
