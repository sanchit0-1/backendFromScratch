const express = require('express');
const app = express();
const connectToDB = require('./src/db/db');
connectToDB();


app.post('/about', (req,res)=>{
    res.send("hello")
})

app.listen(3000, ()=> {
    console.log("server started at port 3000!")
})