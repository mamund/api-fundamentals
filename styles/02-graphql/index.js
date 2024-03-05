// API Fundamentals
// 2023-08 : @mamund
// style : GraphQL
var hello = require('./../services/hello.js');
var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

// Construct a schema, using GraphQL schema language (SDL)
var schema = buildSchema(`
  type Query {
    hello(who:String, where:String): answer
  }
    
  type answer {
    who: String
    where: String
  }
`)

// The resolver functions for each API endpoint
var root = {
  hello: ({who,where}) => {
    var answer = {};
    var args = {};
    args.who = who;
    args.where = where;
    answer = hello.welcome(args);
    return answer
  }  
}

var app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")
