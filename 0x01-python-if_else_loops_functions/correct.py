#!/usr/bin/python3

i = 0
while(i <= 9):
    j = 1

    while(j <= 9):
        if i < j:
            print("{}{},".format(i, j), end=' ')
        elif i > j and i != 9 and j != 8:
            print("{}{},".format(j, i), end=' ')
        elif i > j and i == 9 and j == 8:
            print("{}{}".format(j, i))
        else:
            break
        j += 1
    i += 1
