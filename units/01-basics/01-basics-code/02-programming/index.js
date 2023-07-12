const express = require('express')
const app = express()
const port = 3000

// API
app.get('/', (req, res) => {
  res.send(sayHello())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// SERVICES
function sayHello() {
  return "Hello World!";
}

