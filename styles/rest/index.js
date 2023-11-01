// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
//
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
function sayHello(req) {
  var who = "";
  who = req.query.who||"world";
  return who;
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
  res.send(JSON.stringify(message,null,2));
});

// the welcome resource
app.get('/welcome', (req, res) => {
  message.hello.who = sayHello(req);
  res.send(JSON.stringify(message,null,2));
});

// stub for creating a resource
app.post('/welcome', (req, res) => {
  console.log(req.body);
  message.hello.who = req.body.who||"";
  res.send(JSON.stringify(message,null,2));
});

