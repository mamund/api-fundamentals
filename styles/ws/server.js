// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: Websockets (server)

const PORT = 3030;
const WebSocketServer = require('ws');
const wss = new WebSocketServer.Server({ port: PORT });


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
    }
});
console.log("The server is running on port "+PORT);
