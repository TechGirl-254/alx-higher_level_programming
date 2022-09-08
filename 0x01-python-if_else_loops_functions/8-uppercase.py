#!/usr/bin/python3
def uppercase(str):
    i = 0

    while(i < (len(str))):
        a = ord(str[i])

        if a >= 97 and a <= 122:
            print("{}".format(chr(a - 32)), end=' ')
        else:
            print("{}".format(str[i]), end=' ')
        i += 1
