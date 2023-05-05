#!/bin/bash
#Sending a post request and returning the data sent on the response body
curl -s 0.0.0.0:5000/catch_me -X "PUT" -d "You got me!"
