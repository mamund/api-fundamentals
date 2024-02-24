// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: Webhooks (register server)

const hello = require('./../services/hello.js');
const request = require('sync-request');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// local vars
var clients = [];
const PORT = 3020;
const msgTopic = "welcome";
const greetings = ['you','me','mike'];
const location = ['there','here','world']

// repeat loop to send alerts
setInterval(function(){ 
  sendAlerts(clients);
},2500);


/**********************************************
  HTTP processing
 **********************************************/

// register a new client request for alerts
app.post('/webhook', function(req, res) {
  var answer = {}
  if(req.body.url) {
    clients.push(req.body.url);
    answer.status = 'OK';
    answer.clients = clients;
  }
  else {
    answer.status = 'Missing URL';
    answer.clients = clients;
  }
  res.status(200).send(JSON.stringify(answer,null,2))
  res.end();
});

// listen for requests
app.listen(PORT, () => {
    console.log(`Webhook register server listening on port ${PORT}`);
});

/**********************************************
  local work to be done
 **********************************************/
 
// send alerts to each client
function sendAlerts(list) {
  var body = JSON.parse(sayHello());
  console.log('sending alerts...');
  console.log(JSON.stringify(body,null,2));
  
  list.forEach((url) => {
    try {
      res = request("POST", url, {json:body});
    } catch (err) {
      // na
    }
    console.log(res.getBody('utf-8'));
  });
}

// create topic message
function sayHello() {
  var args = {};
  var rtn = null;
  var msg = {};
  args.who = randomGreeting();
  args.where = randomLocation();
  
  msg.topic = msgTopic;
  msg.timestamp = new Date().toLocaleString();
  msg.message = hello.welcome(args);
  
  return JSON.stringify(msg, null, 2);
}

// pick a random "who" value
function randomGreeting() {
  var max = 2;
  var min = 0;
  var i = Math.floor(Math.random() * (max - min + 1) + min);
  return greetings[i];
}

// pick a random "where" value
function randomLocation() {
  var max = 2;
  var min = 0;
  var i = Math.floor(Math.random() * (max - min + 1) + min);
  return location[i];
}


