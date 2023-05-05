#!/bin/bash
#Sending a post request and returning the data sent on the response body
curl -sL 0.0.0.0:5000/catch_me -X PUT -H "Origin: X-School-User-Id" -d "user_id=98"
