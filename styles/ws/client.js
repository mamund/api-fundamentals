// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: Websockets (client)

const PORT = 3030;
const WebSocket = require('ws')
const ws = new WebSocket('ws://localhost:'+PORT);
const greetings = ['you','me','world'];

ws.on('open', function open() {
    // send message every second
    setInterval(
      function() {
        ws.send("Hello "+randomGreeting());
      },1000
    );
    // echo any message received
    ws.on('message', function message(data) {
      console.log(`${data}`);
    });
});

function randomGreeting() {
  var max = 2;
  var min = 0;
  var i = Math.floor(Math.random() * (max - min + 1) + min);
  return greetings[i];
}
