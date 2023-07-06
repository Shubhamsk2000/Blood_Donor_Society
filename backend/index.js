const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path');
require('./db/conn');
const Register = require('./models/registers')
const cors = require('cors');
app.use(cors())
const fs = require('fs');


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

    const userData = new Register({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      bloodtype: req.body.bloodtype
    })

    const registered = await userData.save();
    res.sendFile(path.join(__dirname, '../index.html'))


  } catch (error) {
    res.status(400).send(error)
  }
})
// console.log(path.join(__dirname, '../index.html'))
app.get('/bloodbanks', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/bloodbanks.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html'))
})


app.get('/search', async (req, res) => {
  try {
    const userDataVariable = await Register.find({});
    const htmlFilePath = path.join(__dirname, '../public/findDonor.html');

    fs.readFile(htmlFilePath, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Error reading HTML file');
      }

      const modifiedHTML = addUserDataToHTML(data, userDataVariable);
      res.send(modifiedHTML);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
});


function addUserDataToHTML(html, userData) {

  let modifiedHTML = html;

  userData.forEach(user => {
    modifiedHTML += `
    
      <div class="userInfo">
        
        <h3>Name: ${user.name}</h3>
        <h4>Name: ${user.bloodtype}</h4>
        <p>Email: ${user.email}</p>

      </div>
    `;
  });

  return modifiedHTML;
}







////// JO THA YAHI TAK THA //////////


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


