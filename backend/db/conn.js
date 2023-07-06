const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hp15series:hp15series@cluster0.kscvv9n.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log(`DB connection successful`);
}).catch((e) => {
    console.log(`connection failed` , e.message);
})
