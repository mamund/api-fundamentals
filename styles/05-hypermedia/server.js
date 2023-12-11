// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: hypermedia (server)

const hello = require('./../services/hello.js');
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
  var args = {};
  var answer = {};
  args.who = req.query.who;
  args.where = req.query.where;
  
  answer = sayHello(args);
  
  message.hello.who = answer.who;
  message.hello.where = answer.where;
  res.send(JSON.stringify(message,null,2))
})

app.get('/form', (req, res) => {
  var args = {};
  var answer = {};
  args.who = req.query.who;
  args.where = req.query.where;
  
  answer = sayHello(args);
  
  message.hello.who = answer.who;
  message.hello.where = answer.where;
  res.send(JSON.stringify(message,null,2));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function sayHello(args) {
  var rtn = hello.welcome(args);  
  return rtn;
}

/*
function sayWho(req) {
  return req.query.who||"you";
}

function sayWhere(req) {
  return req.query.where||"world";
}
*/
