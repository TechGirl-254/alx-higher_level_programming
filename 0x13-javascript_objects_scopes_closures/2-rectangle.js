#!/usr/bin/node

// Creating a Rectangle class with conditionals for length and wiidth.

class Rectangle {
   
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
          }
        }
}
module.exports = Rectangle;
