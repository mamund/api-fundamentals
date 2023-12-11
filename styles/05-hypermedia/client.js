// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: hypermedia (client)

const request = require('sync-request');
const querystring = require('querystring');

var qs = {};
var data = "";
var url = "http://localhost:3010/";

// shared state for filling in form
const formName = "welcome";
const whoData = {"name":"who","value":"mike"}
const whereData = {"name":"where","value":"planet"}

// make http calls
data = callRoot();
data = callForm(data);

return
// *** eof ***

/***********************************************
  HTTP processing
************************************************/

// make call to root
function callRoot() {
  var rtn = "";
  var response = null;
  
  console.log("calling root URL...");
  response = makeRequest("GET", url, {headers:{"accept":"application/json"}});
  rtn = response.getBody("UTF8");
  console.log(rtn);
  
  return rtn;
}

// find & fill in form
function callForm(data) {
  var rtn = "";
  var response = null; 
  var body = {};
  var form = {};
  var idx, href, method;

  console.log("filling in form...");
  
  body = JSON.parse(data);
  form = body.hello.form;

  if(form && form.name.toLowerCase() === formName) {
    href = form.href;
    method = form.method;
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
    response = makeRequest(method, href, 
      {headers:{"accept":"application/json"}}, qs);
    rtn = response.getBody("UTF8");
    console.log(rtn);
  }
  return rtn
}

// handle http conversations (request/response)
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


