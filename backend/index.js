const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path');
require('./db/conn');
const Register = require('./models/registers')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../')))

// get and post methods for registration 

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/registration.html'))
})
// create new user in our collection 

app.post('/register', async (req, res) => {
  try {

    console.log(req.body)
    res.send(req.body)

  } catch (error) {
    res.status(400).send(error)
  }
})

app.get('/bloodbanks', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/bloodbanks.html'))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html'))
})
app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/findDonor.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

