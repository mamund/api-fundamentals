/***********************************************
  Storage (for memory only)
  API Fundamentals
  2023-08 : mike amundsen 
  (@mamund)
************************************************/

// define storage details
var memory = function() {

  var records = [];
  
  // public methods
  function init() {
    records.push({id:"q1w2e3",hello:{who:"ME",where:"HERE"}});
    records.push({id:"w2e3r4",hello:{who:"YOU",where:"THERE"}});      
  }
  
  function list () {
    return records;
  };
  
  function item(id) {
    rtn = {};
    var idx = getIndex(id);
    if(idx !== -1) {
      rtn = records[idx];
    }
    return rtn;
  };
  
  function write(item) {
    item.id = makeId();
    records.push(item);
    return item;
  };
  
  function update(item) {
    var rtn = {};
    var idx = getIndex(item.id);
    if(idx !== -1 ) {
      records[idx].hello.who = item.hello.who;
      records[idx].hello.where = item.hello.where;
      rtn = records[idx]
    }
    return rtn;
  };
  
  function remove(id) {
    var rtn = {};
    var temp = []; 
    var idx = getIndex(id);
    if(idx !== -1) {
      for (var i=0; i<records.length; i++) { 
        if (i!==idx) { 
          temp.push(records[i]); 
        } 
      } 
      records = temp;
      rtn = records;
    }
    return rtn;
  };

  // private methods
  function getIndex(id) {
    return records.findIndex(elm => elm.id === id);
  }

  function makeId() {
    var rtn;
    rtn = String(Math.random());
    rtn = rtn.substring(2);
    rtn = parseInt(rtn).toString(36);
    return rtn;
  }
  
  // publish select methods
  var that = {};
  that.init = init;
  that.list = list;
  that.item = item;
  that.write = write;
  that.update = update;
  that.remove = remove;
  
  return that;
};

// export storage functionality
module.exports = memory();


// EOF

