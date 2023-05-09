#!/usr/bin/python3

"""Sending a GET request using request package"""

import requests

if __name__ == "__main__":
    url = "https://alx-intranet.hbtn.io/status"
    r = requests.get(url)
    response = r.text
    print(f"Body response:\n\t- type:{type(response)}\n\t- content:{response}")
