const express = require('express') // here we import express
const app = express() // here made the server 
app.listen(3000,()=>{ // here we started our server now when we run cmd (node server.js) the server will start and can be access in http://localhost:3000/
    console.log("server started !"); 
})