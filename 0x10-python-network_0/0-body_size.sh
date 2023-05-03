#!/bin/bash
#This file uses a CLI arguement to send a request to a server
curl -sI "$1" | grep -i 'content-length' | cut -d " " -f2-
