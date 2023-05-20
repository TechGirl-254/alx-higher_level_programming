const SupSquare = require('./5-square');

class Square extends SupSquare {
  charPrint (c) {
    if (!c) {
      c = 'X';
    }
    let x = 0;
    while (x < this.height) {
      let y = 1;
      while (y < this.width) {
        process.stdout.write(c);
        y += 1;
      }
      console.log(c);
      x += 1;
    }
  }
}

module.exports = Square;
