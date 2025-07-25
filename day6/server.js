const express = require('express');
const app = express();
const connectToDB = require('./src/db/db')
const noteModel = require('./src/models/note.model')
app.use(express.json())
connectToDB()
// now we will perform CRUD operation, 
/*
C - create
R - read
U - update
D - delete
*/
app.post('/notes', async (req,res)=>{
    const{title, content} = req.body
    noteModel.create({
        title,content
    })
    
    res.json({
        message:"succesfullly",
        title,content
    })
})


app.listen(3000,()=>{
    console.log("your server is running on port 3000! ")
})