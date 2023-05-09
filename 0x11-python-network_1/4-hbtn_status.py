#!/usr/bin/python3

"""Sending a GET request using request package"""

import requests

if __name__ == "__main__":
    r = requests.get("https://alx-intranet.hbtn.io/status")
    response = r.text
    print(f"Body response:\n\t- type:{type(response)}\n\t- content:{response}")
