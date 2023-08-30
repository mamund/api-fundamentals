## Webhooks Notes

### Install
```
touch index.js
npm init -y
npm install express -s
npm install body-parser -s
```

### Run Server
```
node index.js
```

### Run client
```
curl -X POST \
-H "Content-Type: application/json" \
-d '{"event":"welcome", "data": {"message": "Hello, World!"}}' \
http://localhost:3020/webhook
```

### Reference
* https://reintech.io/blog/how-to-use-node-js-to-create-a-webhook-receiver

