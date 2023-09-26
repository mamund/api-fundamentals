#!/bin/bash

# test graphql queries 
# 2023-09 @mamund

# uses:
# - curl to make HTTP request
# - jq to format JSON responses

clear

# no args
curl -X POST \
-H "Content-Type:application/json" \
-d '{"query":"{hello}"}' \
--silent --show-error --fail \
localhost:4000/graphql | jq .

# one arg
curl -X POST \
-H "Content-Type:application/json" \
-d '{"query":"{hello(who:\"mike\")}"}' \
--silent --show-error --fail \
localhost:4000/graphql | jq .

# two args
curl -X POST \
-H "Content-Type:application/json" \
-d '{"query":"{hello(who:\"mike\",where:\"here\")}"}' \
--silent --show-error --fail \
localhost:4000/graphql | jq .

# EOF
