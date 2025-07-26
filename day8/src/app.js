const express = require('express')
const indexRoutes = require("./routes/index.routes");
const app = express();    //this is app
app.use('/',(req,res,next)=>{
    console.log("this the middleware b/w app and router")
    next()
})                     // this middleware where we use between app and router       

app.use('/',indexRoutes); // this is router

module.exports = app;