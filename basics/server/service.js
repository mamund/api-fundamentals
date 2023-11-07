// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
//

// handle simple math
const math = (args) => {
  var action  = args.action.toLowerCase()||"";
  var x = args.x||0;
  var y = args.y||0;
  var rtn = 0;
  
  switch (action) {
    case "add":
      rtn = x + y;
      break;
    case "subtract":
      rtn = x-y;
      break;
    case "multiply":
      rtn = x*y;
      break;
    case "divide":
      rtn = x/y;
      break;
    default:
      rtn = 0;
  }  
   
  return rtn; 
}

// export as a public function
exports.compute = math;


