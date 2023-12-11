// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: Webhooks (receiver)

const hello = require('./../services/hello.js');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3020;

const app = express();
app.use(bodyParser.json());

// echo any message sent to you
app.post('/webhook', (req, res) => {
    var answer = {}
    answer.message = hello.welcome(req.body);
    console.log('Received: '+JSON.stringify(req.body,null,2));
    res.status(200).send(JSON.stringify(answer,null,2));
});

app.listen(PORT, () => {
    console.log(`Webhook receiver listening on port ${PORT}`);
});


