// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: hypermedia (client)

const request = require('sync-request');
const querystring = require('querystring');

var response = null;
var output = "";
var body = {};
var qs = {};
var url = "http://localhost:3010/";

// for filling in form
const formName = "who";
const whoData = {"name":"who","value":"mike"}
const whereData = {"name":"where","value":"planet"}

// make call to root
console.log("calling root URL...");
response = makeRequest("GET", url, {headers:{"accept":"application/json"}});
output = response.getBody("UTF8");
console.log(output);

// find & fill in form
body = JSON.parse(output);
var form = body.hello.form;

console.log("filling in form...");
if(form && form.name.toLowerCase() === formName) {
  var idx;
  var href = form.href;
  var method = form.method;
  if(form.args) {
    idx = form.args.indexOf(whoData.name);
    if(idx!==-1) {
      qs[form.args[idx]] = whoData.value;
    }
    idx = form.args.indexOf(whereData.name);
    if(idx!==-1) {
      qs[form.args[idx]] = whereData.value;
    }
  }
  
  // make the form call
  console.log("making form request...");
  response = makeRequest(method, href, {headers:{"accept":"application/json"}}, qs);
  output = response.getBody("UTF8");
  console.log(output);
}

// handle http conversation (request/response)
function makeRequest(method,url,headers,body) {
  var rt = {};
  var href = url;
  
  switch (method.toUpperCase()) {
    case "GET":
      if(body) {
        href = url + "?" + querystring.stringify(body);
        rt = request(method, href, headers);
      } 
      else {
        rt = request(method, href, headers);
      }  
    case "DELETE":
      rt = request(method, href, headers);
    case "POST":
    case "PUT":
      rt = request(method, href, headers, body);
    default:
  }
  console.log(href);
  return rt;
}


