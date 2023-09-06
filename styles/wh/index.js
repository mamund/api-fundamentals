// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: Webhooks (receiver)


const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3020;

const app = express();
app.use(bodyParser.json());

// echo any message sent to you
app.post('/webhook', (req, res) => {
    console.log('Received Webhook:', req.body);
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Webhook receiver listening on port ${PORT}`);
});
