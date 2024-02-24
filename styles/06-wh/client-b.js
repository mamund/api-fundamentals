// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: Webhooks (client B)

const request = require('sync-request');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3040;

const app = express();
app.use(bodyParser.json());

const registerURL = "http://localhost:3020/webhook";
const thisURL = "http://localhost:3040/event"

registerClient(registerURL,thisURL);

/**********************************************
  HTTP processing
 **********************************************/

// ready to receive an alert
app.post('/event', (req, res) => {

  console.log("Event notice received.");
  console.log(JSON.stringify(req.body,null,2));
  console.log("");
  
  res.status(200).send("OK");
  res.end();
});

// listen for requests
app.listen(PORT, () => {
    console.log(`Webhook client-B listening on port ${PORT}`);
});

// register this client for alerts
function registerClient(server,client) {
  try {
    res = request(
      "POST", 
      server, 
      {json:{url:client}}
    );
  } catch (err) {
    // na console.log(err);
  }
  console.log("Sent "+res.getBody('utf-8')+" to "+server);
}
