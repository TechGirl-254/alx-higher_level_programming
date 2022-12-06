class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let i = 1;
    while (i <= this.height) {
      console.log('X'.repeat(this.width));
      i++;
    }
  }

  rotate () {
    const k = this.width;
    this.width = this.height;
    this.height = k;
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
}
module.exports = Rectangle;
