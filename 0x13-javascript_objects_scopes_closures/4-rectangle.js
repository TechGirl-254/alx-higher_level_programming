#!/usr/bin/node

//Printing a rectangle using multiple methods.

class Rectangle {

    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }
    print() {
        let x = 0;
        while (x < this.height) {
            let y = 1;
            while (y < this.width) {
                process.stdout.write('X');
                y += 1;
            }
            console.log('X');
            x += 1;
        }
    }
    rotate() {
        const h = this.width
        this.width = this.height;
        this.height = h;
    }
    double() {
        this.width *= 2;
        this.height *= 2;
    }
}

module.exports = Rectangle;
