const app = require("./src/app");
const connectToDB = require("./src/db/db");
require('dotenv').config() // Think of require('dotenv').config() as setting up the global environment for your application. You want that setup to happen once, at the very beginning of your application's lifecycle, so that all subsequent modules have access to those environment variables when they need them.
connectToDB();
// POST /register - user create/register karna hai 
//POST /login - check username &password then logged
app.listen(3000,()=>{
    console.log("server started !")
})