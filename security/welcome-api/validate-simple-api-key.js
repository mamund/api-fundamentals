/***********************************************
  simple API Key validation (for in-memory only)
  API Fundamentals
  2023-08 : mike amundsen 
  (@mamund)
  this is an express middleware function
************************************************/

const crypto = require('crypto');

var apiKey = function() {
  var coll = []
  
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
      res.status(401).send(JSON.stringify({status:401,message:"Unauthorized."}, null,2));
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

