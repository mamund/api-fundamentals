// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
//
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// local data storage
var records = require('./storage.js');
records.init();

// home response
var home = {};
home.hello = {};
home.hello.who = "";
home.link = {rel:"welcome", href:"http://localhost:3000/welcome"};

/********************************************************
 * HTTP interface 
 ********************************************************/

// listening for requests
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});

// home resource
app.get('/', (req, res) => {
  res.set("content-type", "application/json");
  res.status(200).send(JSON.stringify(home,null,2));
});

// welcome list resource
app.get('/welcome', (req, res) => {
  res.set("content-type", "application/json");
  res.status(200).send(JSON.stringify(records.list(),null,2));
});

// welcome list resource create
app.post('/welcome', (req, res) => {
  var r = {};
  var rtn = {};
  var args = {};
  
  args.who = req.body.who||"";
  args.where = req.body.where||"";
  
  // check client data
  if(args.who==="" || args.where==="") {
    rtn.error = {status:400,message:"Missing arguments: who and where are required"};
  }
  
  // attempt write
  if(!rtn.error) {
    r.hello = {who:args.who,where:args.where};
    rtn = records.write(r);
  }

  // check server data
  if(!rtn.id && !rtn.error) {
    rtn = r.error = {status:500,message:"Unable to store record"};
  }
  
  // send results
  res.set("content-type", "application/json");
  res.status(rtn.error?rtn.error.status:201).send(JSON.stringify(rtn,null,2));
});

// welcome item resource
app.get('/welcome/:id', (req, res) => {
  var rtn = {};
  
  // get data
  rtn = records.item(req.params.id);
  
  // check data
  if(!rtn.id) {
    rtn.error = {status:404,message:"Unable to locate record."}
  }
  
  // send results
  res.set("content-type", "application/json");
  res.status(rtn.error?rtn.error.status:200).send(JSON.stringify(rtn,null,2));
});

// welcome item resource update
app.put('/welcome/:id', (req, res) => {
  var r = {};
  var rtn = {};
  var args = {};  
  var id = ""
   
  // get data
  id = req.params.id||"";
  rtn = records.item(id);
  
  // check data
  if(!rtn.id) {
    rtn.error = {status:404,message:"Unable to locate record."}
  }
  
  // check passed in args
  if(!rtn.error) {
    args.who = req.body.who||"";
    args.where = req.body.where||"";

    // check client data
    if(args.who==="" || args.where==="") {
      rtn.error = {status:400,message:"Missing arguments: who and where are required"};
    }  
  }
  
  // attempt update
  if(!rtn.error) {
    r.id = rtn.id;
    r.hello = {who:args.who,where:args.where};
    rtn = records.update(r);
    if(!rtn.id) {
      rtn.error = {status:500,message:"Unable to store record."};
    }
  }
  
  res.set("content-type", "application/json");
  res.status(rtn.error?rtn.error.status:200).send(JSON.stringify(rtn,null,2));
});

// welcome item resource delete
app.delete('/welcome/:id', (req,res) => {
  var rtn = {};
  var id = ""
  
  // try to read record
  id = req.params.id||"";
  rtn = records.item(req.params.id);
  
  // check data
  if(!rtn.id) {
    rtn.error = {status:404,message:"Unable to locate record."};
  }
  
  // attempt remove
  if(!rtn.error) {
    rtn = records.remove(id)
    if(!Array.isArray(rtn)) {
      rtn.error = {status:500,message:"Unable to remove record."};
    }
  }
  
  res.set("content-type", "application/json");
  res.status(rtn.error?rtn.error.status:200).send(JSON.stringify(rtn,null,2));
});
