// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: async (publisher)

const hello = require('./../services/hello.js');
const mqtt = require('mqtt')

const addr = 'mqtt://test.mosquitto.org';
const app = mqtt.connect(addr);
const msgTopic = "welcome";
const greetings = ['you','me','mike'];
const location = ['there','here','world']

// send a random greeting every second
app.on('connect', function () {
  setInterval(
    function() {
      app.publish(msgTopic, sayHello())
    },1000
  );
  console.log('server running at '+addr);
});

// create return message
function sayHello() {
  var args = {};
  var rtn = "";
  args.who = randomGreeting();
  args.where = randomLocation();
  
  rtn = hello.welcome(args);
  
  return JSON.stringify(rtn, null, 2);
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
