#!/usr/bin/python3
number = int(input("Enter a number between -10000 and 10000 : "))
if number < 0 and number > -10000:
    print("Last digit of {} is -{} and is less than 6 and not 0".format(number,
    (10- (number % 10))))
if number > 0 and number < 10000:
    if number % 10 > 5:
        print("Last digit of {} is {} and is greater than 5".format(number,
            number % 10))
    elif number % 10 < 6 and number % 10 != 0:
        print("Last digit of {} is {} and is less than 6 andnot 0".format(number, number % 10))
    elif number % 10 == 0:
        print("Last digit of {} is {} and is 0".format(number, number % 10))
