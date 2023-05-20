#!/usr/bin/node

//A function that converts base 10 digits to other bases

exports.converter = function (base) {
    return function (x) {
        return x.toString(base);
    }
}
