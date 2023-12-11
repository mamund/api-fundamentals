// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: hypermedia (server)

const hello = require('./../services/hello.js');
const express = require('express')
const app = express()
const port = 3010

/**************************************************
  external calls
***************************************************/
// call to external service
function sayHello(args) {
  var rtn = hello.welcome(args);  
  return rtn;
}

/**************************************************
  HTTP handling
***************************************************/
// shared message/document
var message = {
  hello:
  {
    who:"",where:"",
    form:{
      name:"welcome", 
      href:`http://localhost:${port}/form`,
      method:"get", 
      args:["who","where"]
    }
  }
};

// listen for http on $port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// default root handling
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

// advertised form handling
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


