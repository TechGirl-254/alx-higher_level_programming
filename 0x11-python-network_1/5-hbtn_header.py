#!/usr/bin/python3

"""Reading headers using requests package"""

import requests
from sys import argv

if __name__ == "__main__":
    url = argv[1]
    page = requests.get(url)
    print(page.headers.get("X-Request-Id"))
