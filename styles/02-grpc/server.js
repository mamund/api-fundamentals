// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: gRPC (server)
const hello = require('./../services/hello.js');
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const protoPath = "./hello.proto";
const addr = 'localhost:3040';

const packageDef = protoLoader.loadSync(protoPath);
const helloProto = grpc.loadPackageDefinition(packageDef);

/*******************************
 * work done here
 *******************************/
function sayHello(call, cbFunc) {
  var args = {};
  args.who = call.request.who || "";
  args.where = call.request.where || "";
  
  answer = hello.welcome(args);
  
  cbFunc(null, {message:JSON.stringify(answer,null,2)});
}

/*************************************
 * GRPC interface
 *************************************/
function main() {
  var server = new grpc.Server();
  server.addService(helloProto.Welcome.service,
    {sayHello: sayHello}
  );
  server.bindAsync(addr, 
    grpc.ServerCredentials.createInsecure(), () => {server.start();}
  );
  console.log("server running at "+addr);
}

main();
