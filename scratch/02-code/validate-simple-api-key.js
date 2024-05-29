/***********************************************
  simple API Key validation (for in-memory only)
  API Fundamentals
  2023-08 : mike amundsen 
  (@mamund)
  this is an express middleware function
************************************************/

const crypto = require('crypto');

// preload with a few keys for demo purposes
var apiKey = function() {
  var coll = [
    '3fc1d6fe-c717-4d7b-9eb4-ce8ad50bff1b',
    '6df4c113-f3d9-4299-be39-9a55e2cfff3d', 
    'afa1f9fa-318b-4694-8e1d-37e9d0f07b15',
    '27a89ee4-24a1-410f-ba6c-d6f644a16c5b',
    '2da0e93f-99a9-4794-8ad0-68eed0a41112',
    '60b17492-7b16-47ad-ad77-cc88e0a40b55'
  ]
  
  // generate a new api key
  function generate() {
    var key = crypto.randomUUID();
    coll.push(key);
    return key;
  }
  
  // validate an existing api key
  function validate(req, res, next) {
    var key = req.headers["api-key"]||"";
    var rtn = false;
    
    rtn = false;  
    coll.forEach(function(item) {
      if(item === key) {
        rtn = true;
      }
    });    
    
    if(rtn === true) {
      next();
    }
    else {
      res.set("content-type", "application/json");
      res.status(401).send(JSON.stringify({error:{status:401,message:"Unauthorized. Missing/Invalid API Key"}}, null,2)+"\n\n");
    }  
  }
  
  // publish interface
  var that = {};
  that.generate = generate;
  that.validate = validate;
  that.coll = coll;
  
  return that;
}

module.exports = apiKey();

// 
// EOF
//

