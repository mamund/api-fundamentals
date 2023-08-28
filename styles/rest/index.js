// API Fundamentals
// 2023-08 : mike amundsen (@mamund)
//
const express = require('express')
const app = express()
const port = 3000

var message = {hello:{who:"",{href:"/",rel:"who",args:[}};

app.get('/', (req, res) => {
  message.hello.who = req.query.who||"world";
  res.send(JSON.stringify(message,null,2))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
