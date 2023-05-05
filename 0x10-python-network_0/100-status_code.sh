#!/bin/bash
#Writing the status code of a request on stdout
curl -s -o /dev/null "$1" -Iw '%{http_code}'
