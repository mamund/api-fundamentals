#!/bin/bash

# test graphql queries 
# 2023-09 @mamund

# uses:
# - curl to make HTTP request
# - jq to format JSON responses

clear

# no args
echo '{"query":"{hello}"}'
curl -X POST \
-H "Content-Type:application/json" \
-d '{"query":"{hello}"}' \
--silent --show-error --fail \
localhost:4000/graphql | jq .

# one arg
echo '{"query":"{hello(who:"mike")}"}' 
curl -X POST \
-H "Content-Type:application/json" \
-d '{"query":"{hello(who:\"mike\")}"}' \
--silent --show-error --fail \
localhost:4000/graphql | jq .

# two args
echo '{"query":"{hello(who:"mike",where:"Mars")}"}'
curl -X POST \
-H "Content-Type:application/json" \
-d '{"query":"{hello(who:\"mike\",where:\"Mars\")}"}' \
--silent --show-error --fail \
localhost:4000/graphql | jq .

# EOF
