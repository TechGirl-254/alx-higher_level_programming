#!/usr/bin/python3

import urllib.request as u

with u.urlopen('https://alx-intranet.hbtn.io/status') as f:
    data = f.read()
    print("Body response:\n\t- type: {}\n\t- content: {}\n\t- utf8 content: {}"
          .format(type(data), data, data.decode("utf-8")))
