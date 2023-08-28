// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: Websockets (client)

const PORT = 3030;
const WebSocket = require('ws')
const ws = new WebSocket('ws://localhost:'+PORT);

ws.on('open', function open() {
    ws.send("hello from here");
    ws.on('message', function message(data) {
      console.log(`${data}`);
    });
});
