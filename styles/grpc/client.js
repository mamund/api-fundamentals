// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: gRPC (client)

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const protoPath = "./hello.proto";
const addr = 'localhost:3040';

const packageDef = protoLoader.loadSync(protoPath);
const helloProto = grpc.loadPackageDefinition(packageDef);

function main() {
  var client = new helloProto.Welcome(addr,
    grpc.credentials.createInsecure()
  );
  // simple
  client.sayHello({},function(err,response) {
    console.log('Greeting:', response.message);
  });
  // added args
  client.sayHello({who: 'you', where: 'there'}, function(err, response) {
    console.log('Greeting:', response.message);
  });
}

main();
