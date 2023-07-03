const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/UserRegistration').then(() => {
    console.log(`DB connection successful`);
}).catch((e) => {
    console.log(`connection failed` , e);
})