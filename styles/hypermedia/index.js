// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
// style: hypermedia

const express = require('express')
const app = express()
const port = 3010

var message = {hello:
  {who:"",where:"",
    form:{name:"who", href:"/",method:"get", args:["who","where"]}
  }
};

app.get('/', (req, res) => {
  console.log(req.query);
  message.hello.who = req.query.who||"you";
  message.hello.where = req.query.where||"world";
  res.send(JSON.stringify(message,null,2))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
