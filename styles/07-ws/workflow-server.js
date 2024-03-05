// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: Websockets (server)

const WebSocketServer = require('ws');
const PORT = 3030;

/************************************************
  WSS handling
*************************************************/

// Create connection using websocket
var wss = new WebSocketServer.Server({ port: PORT });
wss.on("connection", ws => {
    console.log("Client connected");

    // respond to incoming messages 
    ws.on("message", data => {
      console.log(`Server Received: ${data}`)
      
      // get input, update workflow status
      var msg = JSON.parse(data);
      if((`status` in msg)===false) {
        msg.status = "complete";
      }      
      msg = updateWorkflow(msg);
      
      // send out resulting message
      ws.send(JSON.stringify(msg));
      
    });
 
    ws.on("close", () => {
        console.log("Connection closed.");
    });
    
    ws.onerror = function () {
        console.log("Some Error occurred")
    };
});
console.log("The workflow server is running on port "+PORT);

/****************************************************
 local functionality
*****************************************************/
 
// advance the workflow
function updateWorkflow(msg) {
  switch (msg.status) {
    case "waiting":
      msg.status = "working";
      break;
    case "working":
      msg.status = "complete";
      break;
    case "complete":
      msg.status = "waiting";
      break;
  }
  return msg;
}

