#!/usr/bin/node

//A function that returns the the reversed version of a list

exports.esrever = function (list) {
    this.list = list;
    
    let x = list.length;
    let y = 0;
    const newList = [];

    while (x > 0) {
        newList.push(list[y]);
        y += 1;
        x -= 1;
    }
    return newList;
}
