/*****************************************
// bigco, inc company
// root of the service API
// 2020-02-01 : mamund
 *****************************************/
 
var express = require('express');
var app = express();
var cors = require('cors');

var resources = require('./darrt/resources');
var port = process.env.PORT || 8484;

// support calls from JS in browser
app.use(cors());
app.options('*',cors()); 

// use to gen/call api keys
// demo only, no persisted storage
var apiKey = require("./validate-simple-api-key.js");
app.use(apiKey.validate);

// point to exposed resources for this API
app.use('/',resources); 

// start listening for requests
app.listen(port, () => console.log(`listening on port ${port}!`));
