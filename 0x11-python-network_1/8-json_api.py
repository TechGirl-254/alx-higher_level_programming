#!/usr/bin/python3

"""Checking JSON response for a post request"""

import requests
from sys import argv

if __name__ == "__main__":
    if type(argv[1]) == int or len(argv) < 2:
        params = {"q": ""}
    else:
        params = {"q": argv[1]}
        try:
            request = requests.post("http://0.0.0.0:5000/search_user", params)
            json_response = request.json()
            if json_response:
                print("[{}] {}".format(json_response['id'],
                    json_response['name']))
            else:
                print('No result')
        except ValueError:
            print("Not a valid JSON")
