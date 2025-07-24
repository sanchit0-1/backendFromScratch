const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect("mongodb+srv://sancauster0.vgm.mongodb.net/sanchit")
    .then(() =>{
        console.log("connected to database")
    })
}

module.exports = connectToDB; // here we make function to connect to express to databse for that we make function as such folder structure in a file and import it to main server file and call that function whenever we use that server file it will connect to you to data base and also at time it will create all  end point you made;    

/**alert this link in function is wrong for security purpose. */