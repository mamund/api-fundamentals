// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: hypermedia (server)

const express = require('express')
const app = express()
const port = 3010

var message = {
  hello:
  {
    who:"",where:"",
    form:{
      name:"who", 
      href:`http://localhost:${port}/form`,
      method:"get", 
      args:["who","where"]
    }
  }
};

app.get('/', (req, res) => {
  message.hello.who = sayWho(req); //req.query.who||"you";
  message.hello.where = sayWhere(req); //req.query.where||"world";
  res.send(JSON.stringify(message,null,2))
})

app.get('/form', (req, res) => {
  message.hello.who = sayWho(req); //req.query.who||"you";
  message.hello.where = sayWhere(req); //req.query.where||"world";
  res.send(JSON.stringify(message,null,2))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function sayWho(req) {
  return req.query.who||"you";
}

function sayWhere(req) {
  return req.query.where||"world";
}
