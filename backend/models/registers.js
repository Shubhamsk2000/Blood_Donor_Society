const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type : String,
        required : true
    },
    bloodtype : {
        type : String,
        require : false
    }
})

// we need to create a collection 

const Registers = new mongoose.model("Register", userDataSchema)

module.exports = Registers;
