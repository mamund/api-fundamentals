// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: Webhooks (client A)

const request = require('sync-request');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3030;

const app = express();
app.use(bodyParser.json());

const registerURL = "http://localhost:3020/webhook";
const url = "http://localhost:3030/event"

registerClient();

/**********************************************
  HTTP processing
 **********************************************/

// ready to receive an alert
app.post('/event', (req, res) => {

  console.log("Event notice received.");
  console.log(req.body);
  console.log("");
  
  res.status(200).send("OK");
  res.end();
});

// listen for requests
app.listen(PORT, () => {
    console.log(`Webhook client-A listening on port ${PORT}`);
});

// register this cliennt for alerts
function registerClient() {
  try {
    res = request(
      "POST", 
      registerURL, 
      {json:{url:'http://localhost:3030/event'}}
    );
  } catch (err) {
    // na console.log(err);
  }
  console.log("Sent "+res.getBody('utf-8')+" to "+registerURL);
}
