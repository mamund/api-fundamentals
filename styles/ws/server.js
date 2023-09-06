// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: Websockets (server)

const PORT = 3030;
const WebSocketServer = require('ws');
const wss = new WebSocketServer.Server({ port: PORT });
const greetings = [
  "you're still connected",
  "thanks for sending your data",
  "your data has been collected"];


// Creating connection using websocket
wss.on("connection", ws => {
    console.log("new client connected");
    ws.send('Welcome, you are connected!');
 
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`)
    });
 
    ws.on("close", () => {
        console.log("the client has connected");
    });
    
    ws.onerror = function () {
        console.log("Some Error occurred")
    };

    // send message every second
    setInterval(
      function() {
        ws.send("Hello, "+randomGreeting());
      },1000
    );
    
    
});
console.log("The server is running on port "+PORT);


// generate randome messages
function randomGreeting() {
  var max = 2;
  var min = 0;
  var i = Math.floor(Math.random() * (max - min + 1) + min);
  return greetings[i];
}
