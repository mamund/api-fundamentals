#!/bin/bash

# test graphql queries 
# 2023-09 @mamund

# uses:
# - curl to make HTTP request

# results appear at the SERVER (not here)

curl -X POST \
-H "Content-Type: application/json" \
-d '{"event":"welcome", "data": {"message": "Hello, World!"}}' \
--silent --show-error --fail \
http://localhost:3020/webhook
echo .

curl -X POST \
-H "Content-Type: application/json" \
-d '{"event":"welcome", "data": {"message": "Hi there, everyone"}}' \
--silent --show-error --fail \
http://localhost:3020/webhook
echo .

# EOF
