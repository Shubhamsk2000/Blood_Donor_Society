const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname,'../')))

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/registration.html'))
})

app.get('/blood banks', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/bloodbanks.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})