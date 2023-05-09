#!/usr/bin/python3

"""Making a POST request using requests package"""

import requests
from sys import argv

if __name__ == "__main__":
    mydata = {
            "email": "argv[2]"
            }
    page = requests.post(argv[1], mydata)
    print(f"Your email is: {page.text}")
