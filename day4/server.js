const express = require('express');
const app = express();
app.use(express.json()) // here we have to use this middle ware to show data on postman because express doesnot read directly.
// here we will create routes to make notes and get data and show it again on client side.

let notes = [];
app.get('/about', (req,res)=>{
    res.send(notes).json({
        
    })
})

app.post('/about', (req,res)=>{
    notes.push(req.body)
    res.json({
        message: "note added!"
    })
})








app.listen(3000,() => {
    console.log("server started at port 3000!")
})