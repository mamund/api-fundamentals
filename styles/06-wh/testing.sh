#!/bin/bash

# test graphql queries 
# 2023-09 @mamund

# uses:
# - curl to make HTTP request

# results appear at the SERVER (not here)

curl -X POST \
-H "Content-Type: application/json" \
-d '{"when":"now","what":"nothing"}' \
--silent --show-error --fail \
http://localhost:3020/webhook
echo .

curl -X POST \
-H "Content-Type: application/json" \
-d '{"who":"me"}' \
--silent --show-error --fail \
http://localhost:3020/webhook
echo .

curl -X POST \
-H "Content-Type: application/json" \
-d '{"who":"mike","where":"mars","when":"now"}' \
--silent --show-error --fail \
http://localhost:3020/webhook
echo .

# EOF
