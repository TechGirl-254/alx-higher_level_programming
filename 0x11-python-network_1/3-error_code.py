#!/usr/bin/python3

"""HTTPError handling"""

from urllib import request, error
from sys import argv

if __name__ == "__main__":
    def request_function(arg):
        try:
            with request.urlopen(arg) as r:
                body = r.read().decode("utf-8")
                print(body)
        except error.HTTPError as err:
            print("Error code: " + err.code)

request_function(argv[1])
