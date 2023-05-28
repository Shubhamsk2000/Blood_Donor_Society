const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname,'../')))


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/registration.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})