#!/usr/bin/node

// A function that checks the number of occurences in a list.

exports.nbOccurences = function (list, searchElement) {
  this.list = list;
  this.searchElement = searchElement;

  const mylist = [];
  let x = 0;
  let y = 0;
  let z = 0;
  let counter = 0;

  while (x < list.length) {
    if (mylist.length === 0) {
      mylist[y] = list[z];
    } else {
      if (mylist[y] === searchElement) {
        counter += 1;
      }
      mylist.push(list[z]);
      y += 1;
      x += 1;
    }
    z += 1;
  }
  return mylist;
};
