const mongoose = require('mongoose')
function connectToDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connected to database !")
    })
    .catch(err =>{
        console.log("error: ", err)
    }) 
}
module.exports = connectToDB;