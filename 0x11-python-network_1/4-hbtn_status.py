#!/usr/bin/python3

"""Sending a GET request using request package"""

import requests

url = "https://alx-intranet.hbtn.io/status"
r = requests.get(url)
response = r.text
print(f"Body response:\r\n - type: {type(response)}\r\n - content: {response}")
