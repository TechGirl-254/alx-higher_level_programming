#!/usr/bin/python3

"""Accessing header values from a URL passed as a CLI argument"""

import urllib.request as u
from sys import argv

if __name__ == '__main__':
    url = argv[1]
    with u.urlopen(url) as f:
        response = f.info()
        print(response.get('X-Request-Id'))
