// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
//
const express = require('express')
const app = express()
const port = 3000

var message = {hello:{who:""}};

app.get('/welcome', (req, res) => {
  message.hello.who = sayHello(req);
  res.send(JSON.stringify(message,null,2))
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

function sayHello(req) {
  var who = "";
  who = req.query.who||"world";
  return who;
}
