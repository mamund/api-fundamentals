// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: Websockets (client)

const PORT = 3030;
const WebSocket = require('ws')
const hello = require('./../services/hello.js');

/**********************************************************
  WSS handling
***********************************************************/
  
// open socket and start conversation
var ws = new WebSocket('ws://localhost:'+PORT);
ws.on('open', function open() {
    // send initial message
    var msg = sayHello();
    ws.send(msg);
    console.log(`Client Sent: ${msg}`);
    
    // reply to received messages
    ws.on('message', function message(data) {
      var msg = JSON.parse(data);
      console.log(`Client Received: ${data}`);
      
      // set a delay to make monitoirng easier
      setTimeout(function(){
        updateMessage(msg);
        ws.send(JSON.stringify(msg));
      }, 2000);
    });   

    ws.on("close", () => {
        console.log("Connection closed.");
    });
});

// in case we can't connect to the server
ws.onerror = function () {
  console.log("WebSocket unavailable.")
};    

/***************************************************
 local functionality
****************************************************/
 
// generate initial messsage
function sayHello() {
  var args = {};
  var answer = {};
  args.who = ""; 
  args.where = ""; 
  
  // set initial values
  answer = hello.welcome(args);
  answer.who = ""; 
  answer.where = ""; 
  answer.status == answer.status || "";
  
  return JSON.stringify(answer,null,2);
}

// perform 'work' based on status
function updateMessage(msg) {
  switch(msg.status) {
    // if waiting, set the 'who; value
    case "waiting":
      msg.who = randomGreeting();
      msg.where = "";
      break;
    // if working, set the 'where; value  
    case "working":
      msg.where = randomLocation();
      break;
    // if complete, start again  
    case "complete":
      msg.who = "";
      msg.where = "";
      break;  
    // in case of unknown value  
    default:
      msg.who = "";
      msg.where = "";
      break;  
  }
}

// generate random who value
function randomGreeting() {
  var max = 2;
  var min = 0;
  var i = Math.floor(Math.random() * (max - min + 1) + min);
  var greetings = ['you','me','mike'];

  return greetings[i].toUpperCase();
}

// generate random where value
function randomLocation() {
  var max = 2;
  var min = 0;
  var i = Math.floor(Math.random() * (max - min + 1) + min);
  var location = ['here','there','mars']
  
  return location[i].toUpperCase();
}


