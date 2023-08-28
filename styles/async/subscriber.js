// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: async (subscriber)

const mqtt = require('mqtt')

const addr = 'mqtt://test.mosquitto.org';
const client = mqtt.connect(addr);
const msgTopic = "welcome";

client.on('connect', function () {
  client.subscribe(msgTopic);
  console.log("listening for "+msgTopic+" at "+addr)
});

client.on('message', function (topic, message) {
  console.log(message.toString())
});
