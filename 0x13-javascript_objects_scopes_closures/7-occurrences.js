#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  let i = 0;
  let j = 0;
  while (j < (list.length)) {
    if (list[j] === searchElement) {
      i++;
    }
    j++;
  }
  return (i);
};
