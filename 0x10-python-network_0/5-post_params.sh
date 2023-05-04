#!/bin/bash
#Sending a post request with custom header variables
curl -s "$1" -X "POST" -H "email: test@gmail.com", "subject: I will always be here for PLD"
