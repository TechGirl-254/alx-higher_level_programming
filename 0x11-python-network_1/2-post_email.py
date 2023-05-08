#!/usr/bin/python3

"""Passing an email as a parameter and decoding the response"""

from urllib import request, parse
from sys import argv

if __name__ == "__main__":
    url = argv[1]
    emaildict = {
        "email": argv[2]
        }
    parsed = parse.urlencode(emaildict).encode('utf-8')

    with request.urlopen(url, data=parsed) as responseobj:
        response = responseobj.read()
    print(f"Your email is: ", {response.decode('utf-8')}) 
