// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: Websockets (client)

const PORT = 3030;
const WebSocket = require('ws')
const ws = new WebSocket('ws://localhost:'+PORT);
const hello = require('./../_services/hello.js');
const greetings = ['you','me','mike'];
const location = ['here','there','mars']

ws.on('open', function open() {
    // send message every second
    setInterval(
      function() {
        ws.send(sayHello());
      },1000
    );
    // echo any message received
    ws.on('message', function message(data) {
      console.log(`${data}`);
    });
});

function sayHello() {
  var answer = {};
  var args = {};
  args.who = randomGreeting();
  args.where = randomLocation();
  answer = hello.welcome(args);
  return JSON.stringify(answer,null,2);
}

function randomGreeting() {
  var max = 2;
  var min = 0;
  var i = Math.floor(Math.random() * (max - min + 1) + min);
  return greetings[i];
}

function randomLocation() {
  var max = 2;
  var min = 0;
  var i = Math.floor(Math.random() * (max - min + 1) + min);
  return location[i];
}
