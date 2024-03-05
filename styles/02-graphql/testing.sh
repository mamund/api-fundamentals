#!/bin/bash

# test graphql queries 
# 2023-09 @mamund

# uses:
# - curl to make HTTP request
# - jq to format JSON responses

clear

# no args
echo '{"query":"{hello {who \n where}}"}'
curl -X POST \
-H "Content-Type:application/json" \
-d '{"query":"{hello {who \n where}}"}' \
--silent --show-error --fail \
localhost:4000/graphql | jq .

# one arg
echo '{"query":"{hello(who:"mike") {who}}"}' 
curl -X POST \
-H "Content-Type:application/json" \
-d '{"query":"{hello(who:\"mike\") {who}}"}' \
--silent --show-error --fail \
localhost:4000/graphql | jq .

# two args
echo '{"query":"{hello(who:"mike",where:"Mars"){who \n where}}"}'
curl -X POST \
-H "Content-Type:application/json" \
-d '{"query":"{hello(who:\"mike\",where:\"Mars\"){who \n where}}"}' \
--silent --show-error --fail \
localhost:4000/graphql | jq .

# EOF
