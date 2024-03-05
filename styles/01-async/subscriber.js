// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: async (subscriber)

const mqtt = require('mqtt')

const addr = 'mqtt://test.mosquitto.org';
const app = mqtt.connect(addr);
const msgTopic = "welcome";

// connect to server and subscribe to topic
app.on('connect', function () {
  app.subscribe(msgTopic);
  console.log("listening for "+msgTopic+" at "+addr)
});

// echo each time topic message is received
app.on('message', function (topic, message) {
  console.log(message.toString())
});
