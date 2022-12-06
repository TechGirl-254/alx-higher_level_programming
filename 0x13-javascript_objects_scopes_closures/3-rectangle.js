#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
    this.print = function () {
      let i = 1;
      while (i <= this.height) {
        console.log('X'.repeat(this.width));
        i++;
      }
    };
  }
}
module.exports = Rectangle;
