const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique:true, // this will make two user cannot be same by username
        required:true
    },
    password:{
        type: String
    }
})

const userModel = mongoose.model("user", userSchema)
module.exports = userModel;