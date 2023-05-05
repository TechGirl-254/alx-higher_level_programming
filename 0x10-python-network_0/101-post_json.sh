#!/bin/bash
#Send a POSt request with data from a file insterted as a CLI argument
curl -sX "POST" "$1" -H "Content-Type: application/json" -d @"$2"
