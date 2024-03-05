// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: Websockets (server)

const WebSocketServer = require('ws');
const PORT = 3030;
const replies = [
  "You're still connected",
  "Thanks for sending your data",
  "Your data has been collected",
  "We're still working on the problem",
  "Check status for most recent changes"];

// Creating connection using websocket
var wss = new WebSocketServer.Server({ port: PORT });
wss.on("connection", ws => {
    console.log("Client connected");
    ws.send('{"message":"Welcome, you are connected!"}');
 
    ws.on("message", data => {
        console.log(`Server Received: ${data}`)
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
        var msg = replyMessage();
        ws.send(msg);
        console.log(`Server Sent: ${msg}`);
      },1000
    );
});
console.log("The server is running on port "+PORT);

// craft reply message
function replyMessage() {
  var rtn = "";
  rtn = {message:randomReply()};
  return JSON.stringify(rtn);
}

// generate random messages
function randomReply() {
  var max = 4;
  var min = 0;
  var i = Math.floor(Math.random() * (max - min + 1) + min);
  return replies[i];
}
