// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: Websockets (server)

const PORT = 3030;
const WebSocketServer = require('ws');
const wss = new WebSocketServer.Server({ port: PORT });
const replies = [
  "you're still connected",
  "thanks for sending your data",
  "your data has been collected"];


// Creating connection using websocket
wss.on("connection", ws => {
    console.log("Client connected");
    ws.send('Welcome, you are connected!');
 
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`)
    });
 
    ws.on("close", () => {
        console.log("Client has closed the connection");
    });
    
    ws.onerror = function () {
        console.log("Some Error occurred")
    };

    // send message every second
    setInterval(
      function() {
        ws.send(sayHello());
      },1000
    );
});
console.log("The server is running on port "+PORT);

// craft return message
function sayHello() {
  var rtn = "";
  rtn = "Hello, "+randomReply();
  return rtn;
}

// generate random messages
function randomReply() {
  var max = 2;
  var min = 0;
  var i = Math.floor(Math.random() * (max - min + 1) + min);
  return replies[i];
}
