#!/usr/bin/python3
print_last_digit = __import__('9-print_last_digit').print_last_digit
number = int(input("Enter any positive or negative number: "))

last_digit = print_last_digit(number)
print("{}".format(last_digit))
