// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: gRPC (server)

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const protoPath = "./hello.proto";
const addr = 'localhost:3040';

const packageDef = protoLoader.loadSync(protoPath);
const helloProto = grpc.loadPackageDefinition(packageDef);

/*******************************
 * work done here
 *******************************/
function sayHello(call, callback) {
  callback(null, 
    {message: 'Hello ' + 
      (call.request.who||"") + " " + 
      (call.request.where||"world")
    }
  );
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
