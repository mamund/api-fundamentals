// Hello module
// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
//

const hello = (args) => {
  var who = args.who || "you";
  var where = args.where || "there";
  var answer = {};
  
  answer.who = who;
  answer.where = where;
  
  return answer;
}

exports.welcome = hello;

// EOF
