#!/bin/bash
#Sending a post request with custom header variables
curl -s "$1" -X "POST" -d "email=test%40gmail%2Ecom&subject=I+will+always+be+here+for+PLD"
