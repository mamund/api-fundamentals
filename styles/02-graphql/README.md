## GraphQL Notes

### Installation
```
npm install
```

## Run Server 
```
npm start
```

## Client Query

run the single test script (`testing.sh`)

-OR-

```
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
```

### Reference
https://graphql.org/graphql-js/graphql-clients/
