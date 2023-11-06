// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
//
const math = require('./service.js');
const express = require('express')
const app = express()
const port = 4000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// message template
var message = 
{ answer:0};

/********************************************************
 * HTTP interface 
 ********************************************************/

// listening for requests
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});

// interface-only test
app.get('/test', (req, res) => {
  res.set("content-type", "application/json");
  res.send(JSON.stringify(message,null,2)+"\n");
});

// reading compute results
// http://localhost:4000/read?action=add&x=10&y=10
app.get('/read', (req, res) => {
  var args = {};
  args.action = req.query.action;
  args.x = parseInt(req.query.x)||0;
  args.y = parseInt(req.query.y)||0;
  
  message.answer = math.compute(args);
  
  res.set("content-type", "application/json");
  res.send(JSON.stringify(message,null,2)+"\n");
});

// writing compute results (?)
app.post('/write', (req, res) => {
  var args = {};
  args.action = req.body.action||"";
  args.x = parseInt(req.body.x)||0;
  args.y = parseInt(req.body.y)||0;
  message.answer = math.compute(args);
  
  res.set("content-type", "application/json");
  res.send(JSON.stringify(message,null,2)+"\n");
});

// reading subtraction results
app.get('/subtraction', (req, res) => {
  var args = {};
  args.action = "subtract";
  args.x = parseInt(req.query.x)||0;
  args.y = parseInt(req.query.y)||0;
  message.answer = math.compute(args);
  
  res.set("content-type", "application/json");
  res.send(JSON.stringify(message,null,2)+"\n");
});

