require('dotenv').config()
const mongoose = require('mongoose')
function connectToDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(() =>{
        console.log("connected to data base!");
    })
}
module.exports = connectToDB;