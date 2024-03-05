// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: async (publisher)

const hello = require('./../services/hello.js');
const mqtt = require('mqtt')

const msgTopic = "welcome";
const greetings = ['you','me','mike'];
const location = ['there','here','world']

// connect to broker
const addr = 'mqtt://test.mosquitto.org';
const app = mqtt.connect(addr);

// send a random greeting every second
app.on('connect', function () {
  setInterval(
    function() {
      app.publish(msgTopic, sayHello())
    },1000
  );
  console.log('server running at '+addr);
});

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
