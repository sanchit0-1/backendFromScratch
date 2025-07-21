const express = require('express') // here we import express
const app = express() // here made the server 
app.get('/',(req,res)=> { // now this is called route  such more route collection is called api.
    res.send("hello world")// here when we load search this http://localhost:3000/ then client or browser will send a req to the api and in response it will send data like res.send("hello !")
})


app.listen(3000,()=>{ // here we started our server now when we run cmd (node server.js) the server will start and can be access in http://localhost:3000/
    console.log("server started !");
})