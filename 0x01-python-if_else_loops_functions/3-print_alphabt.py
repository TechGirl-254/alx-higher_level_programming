#!/usr/bin/python3

i = 0

while(i <= 122):
    for i in range(97, 123):
        if i != 113 and i != 101:
            print("{}".format(chr(i)),end='')
        i += 1
