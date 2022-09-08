#!/usr/bin/python3

def print_last_digit(number):
    if number >= 0:
        x = number % 10
        print("{}".format(x), end='')
        return x
    elif number < 0:
        y = (10 - (number % 10))
        print("{}".format(y), end='')
        return y
