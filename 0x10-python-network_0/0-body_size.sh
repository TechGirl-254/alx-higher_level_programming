#!/usr/bin/bash
#This file uses a CLI arguement to send a request to a server
curl -sI "$1" -o newfile.txt | grep -i 'content-length' newfile.txt | awk '{print $2}'
