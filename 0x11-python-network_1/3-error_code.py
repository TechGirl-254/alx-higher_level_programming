#!/usr/bin/python3

"""HTTPError handling"""

from urllib import request, error
from sys import argv

if __name__ == "__main__":
     try:
         with request.urlopen(argv[1]) as r:
             body = r.read().decode("utf-8")
             print(body)
     except error.HTTPError as err:
         print(f"Error code: {err.code}")
