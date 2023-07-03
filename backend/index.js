const express = require('express')
const app = express()
const port =process.env.PORT ||  3000;
const path = require('path')
require('./db/conn');

app.use(express.static(path.join(__dirname,'../')))

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/registration.html'))
})

app.get('/bloodbanks', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/bloodbanks.html'))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/about.html'))
})
app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/findDonor.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

