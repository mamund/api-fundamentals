// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: gRPC (client)

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const protoPath = "./hello.proto";
const addr = 'localhost:3040';

/**********************************************
 * load the interface definition (protobuf)
 **********************************************/
const packageDef = protoLoader.loadSync(protoPath);
const helloProto = grpc.loadPackageDefinition(packageDef);

/**********************************************
 * make the service calls
 **********************************************/
function main() {
  // start instance of service
  var client = new helloProto.Welcome(addr,
    grpc.credentials.createInsecure()
  );

  // simple call
  client.sayHello({},function(err,response) {
    console.log('Greeting:', response.message);
  });
  
  // call with args
  client.sayHello({who: 'you', where: 'there'}, function(err, response) {
    console.log('Greeting:', response.message);
  });
}

// call entry point
main();

//
// EOF
//
