#!/usr/bin/node
const Rectangle = require('./4-rectangle');

class SupSquare extends Rectangle {
  constructor (w) {
    super(w);
    this.width = w;
    this.height = w;
  }
}
module.exports = SupSquare;
