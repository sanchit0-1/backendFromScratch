const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect("mongodb://localhost:27017/new")
    .then(()=>{
        console.log("connected to database !")
    })
}

module.exports = connectToDB;