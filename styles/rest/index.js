// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
//
const hello = require("./../_services/hello.js");
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/********************************************************
 * Welcome service details
 ********************************************************/

// message template
var message = {hello:{who:""}};

// actual work done
function sayHello(args) {
  var rtn = {};
  rtn = hello.welcome(args);
  return rtn;
}

/********************************************************
 * HTTP interface 
 ********************************************************/

// listening for requests
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});

// the root resource
app.get('/', (req, res) => {
  message.hello.who = "";
  res.set("content-type", "application/json");
  res.send(JSON.stringify(message,null,2));
});

// the welcome resource
app.get('/welcome', (req, res) => {
  var args = {};
  args.who = req.query.who||"world";
  args.where = req.query.where||"there";
  
  message.hello = sayHello(args);
  
  res.set("content-type", "application/json");
  res.send(JSON.stringify(message,null,2));
});

// stub for creating a resource
app.post('/welcome', (req, res) => {
  var args = {};
  args.who = req.body.who||"world";
  args.where = req.body.where||"there";
  
  message.hello = sayHello(args);
  
  res.set("content-type", "application/json");
  res.send(JSON.stringify(message,null,2));
});

// stub for deleting a resource
app.delete('/welcome/mike', (req,res) => {
  message.hello.who = "";
  res.set("content-type", "application/json");
  res.send(JSON.stringify(message,null,2));
});

