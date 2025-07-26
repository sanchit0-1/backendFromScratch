const { default: mongoose } = require('mongoose')
const mongooose = require('mongoose')

function connectToDB(){
    mongoose.connect("mongodb+srv://sancaot24:GCfv@cluster0.vgodb.net/cohort")
    .then(()=> {
        console.log("data base is started !")
    })
}
// here I deleted my original url for security purpose
module.exports = connectToDB;