const mongoose = require('mongoose')
function connectToDB(){
    mongoose.connect("mongodb+srv://sancaoodb.net/sanchit")
    .then(() =>{
        console.log("connected to data base!");
    })
}
module.exports = connectToDB;