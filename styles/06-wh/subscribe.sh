#!/bin/bash

# test graphql queries 
# 2023-09 @mamund

# uses:
# - curl to make HTTP request

# results appear at the SERVER (not here)
# --silent --show-error --fail \

curl -X POST \
-H "Content-Type: application/json" \
-d '{"url":"http://localhost:3030/event"}' \
http://localhost:3020/webhook
echo .

#curl -X POST \
#-H "Content-Type: application/json" \
#-d '{"url":"http://localhost:3040/event"}' \
#--silent --show-error --fail \
#http://localhost:3020/webhook
#echo .


# EOF
