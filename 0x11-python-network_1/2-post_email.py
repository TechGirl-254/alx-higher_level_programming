#!/usr/bin/python3

""" Passing an email address as a parameter, making a POST request
and reading the response.
"""

from urllib import request, parse
from sys import argv

if __name__ == "__main__":
    url = argv[1]
    emaildict = {
        "email": argv[2]
        }
    data = parse.urlencode(emaildict).encode('utf-8')

    with request.urlopen(url, data) as responseobj:
        response = responseobj.read()
    print(f"Your email is: ", {response.decode('utf-8')}) 
