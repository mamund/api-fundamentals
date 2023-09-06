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
```
curl -X POST \
-H "Content-Type:application/json" \
-d '{"query":"{hello}"}' \
localhost:4000/graphql

curl -X POST \
-H "Content-Type:application/json" \
-d '{"query":"{hello(who:\"mike\")}"}' \
localhost:4000/graphql

curl -X POST \
-H "Content-Type:application/json" \
-d '{"query":"{hello(who:\"mike\",where:\"here\")}"}' \
localhost:4000/graphql
```

### Reference
https://graphql.org/graphql-js/graphql-clients/
