/*****************************************
// BigCo  to-do list
// todo resources 
// 2020-02-01 : mamund
 *****************************************/

/*******************************************
// initialization and setup for DARRT
********************************************/
var express, router, bodyParser, actions, representation, 
  transitions, utils, templates, forms, metadata;

init();

// shared metadata for this service
metadata = [
  {name: "title", value: "BigCo TODO Records"},
  {name: "author", value: "Mike Amundsen"},
  {name: "release", value: "1.0.0"}
];

var typeName = "todo";

// optional tracking middleware
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now() + " : " + req.headers.host + req.url + " : " + req.method + " : " + JSON.stringify(req.body))
  next()
});

// ***********************************************************
// public resources for the company service
// ***********************************************************
router.get('/',function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.home;
  args.type = "home";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"home"
  };

  respond(args);
});

router.post('/', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.create;
  args.type = typeName;
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"list"
  };

  respond(args);
});

router.get('/list/',function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.list;
  args.type = typeName;
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"list"
  };

  respond(args);
});

router.get('/filter/', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.filter;
  args.type = typeName;
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"list"
  };

  respond(args);
});

router.get('/:id', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.read;
  args.type = typeName;
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"item"
  };

  respond(args);
});

router.put('/:id', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.update;
  args.type = typeName;
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"item"
  };

  respond(args);
});

router.delete('/:id', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.remove;
  args.type = typeName;
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"item"
  };

  respond(args);
});

router.patch('/status/:id', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.status;
  args.type = typeName;
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"item"
  };

  respond(args);
});

router.patch('/due/:id', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.due;
  args.type = typeName;
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"item"
  };

  respond(args);
});

/***********************************************************************/

// initialize module
function init() {
  express = require('express')
  router = express.Router()
  bodyParser = require('body-parser');

  actions = require('./actions');
  representation = require('./representation');
  transitions = require('./transitions');
  utils = require('./lib/utils');

  // set up request body parsing & response templates
  router.use(bodyParser.json({type:representation.getResponseTypes()}));
  router.use(bodyParser.urlencoded({extended:representation.urlencoded}));

  // load response templates and input forms
  templates = representation.getTemplates();
  forms = transitions.forms;
}

// local resource handler function
function respond(args) {
  var request = args.request||null;
  var response = args.response||null;
  var action = args.action||null;
  var object = args.type||"";
  var config = args.config||{};

  return utils.handler(request,response,action,object,config);	
}

// publish the capability routes
module.exports = router
