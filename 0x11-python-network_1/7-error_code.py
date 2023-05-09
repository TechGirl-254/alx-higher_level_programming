#!/usr/bin/python3

"""Error handling with request package"""

import requests
from sys import argv

if __name__ == "__main__":
    e = requests.get(argv[1])
    if e.status_code >= 400:
        print(f"Error code: {e.status_code}")
    else:
        print(e.text)

