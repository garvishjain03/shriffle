const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phoneNo:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const user =mongoose.model('users', userSchema)

module.exports = user