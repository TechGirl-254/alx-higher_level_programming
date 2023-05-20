#!/usr/bin/node

// Creating a Rectangle class with conditionals for length and wiidth.

class Rectangle {
   
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
          }
        };
        
        print() {
            let x = 0;
            while (x < this.height) {
                let y = 1;
                while (y < this.width) {
                    process.stdout.write('X');
                    y += 1;
                }
                x += 1;
                console.log('X');
            }
        }
}
module.exports = Rectangle;
