#!/usr/bin/python3

def print_last_digit(number):
    if number >= 0:
        x = number % 10
        return (x)
    elif number < 0:
        y = -(10 - (number % 10))
        return (y)
