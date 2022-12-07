#!/usr/bin/node
exports.esrever = function (list) {
    const listA = [];
    let i = (list.length - 1);
    let j = 0;
    while (i >= 0) {
        listA[j] = list[i];
        i--;
        j++;
    }
    return (listA);
}
