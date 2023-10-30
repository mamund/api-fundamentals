// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: async (publisher)

const mqtt = require('mqtt')

const addr = 'mqtt://test.mosquitto.org';
const app = mqtt.connect(addr);
const msgTopic = "welcome";
const greetings = ['you','me','world'];

// send a random greeting every second
app.on('connect', function () {
  setInterval(
    function() {
      app.publish(msgTopic, sayHello())
    },1000
  );
  console.log('server running at '+addr);
});

// craft return message
function sayHello() {
  var rtn = "";
  rtn = "Hello, "+randomGreeting();
  return rtn;
}

function randomGreeting() {
  var max = 2;
  var min = 0;
  var i = Math.floor(Math.random() * (max - min + 1) + min);
  return greetings[i];
}
