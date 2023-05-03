#!/bin/bash
#Displaying all the http methods that server supports.
curl -sIX "OPTIONS" "$1" | grep -i "Allow" | cut -d " " -f2-
