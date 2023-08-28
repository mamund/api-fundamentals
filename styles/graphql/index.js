// API Fundamentals
// 2023-08 : @mamund
// style : GraphQL

var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello(who:String,where:String): String
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  hello: ({who,where}) => {
    return "Hello "+(who||"")+" "+(where||"world") 
  },
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
