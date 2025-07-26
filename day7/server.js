const express = require('express')
const connectToDB = require('./src/db/db');
const noteModel = require('./src/models/note.model');
const app = express()
connectToDB();
//middleware
app.use(express.json())

// from here we will make routes this is create operation
app.post('/notes',async (req,res)=>{
    const {title,content} = req.body;
    console.log(title, content);
    await noteModel.create({title,content});

    res.json({
        message: "note created !"
    })
})
// get method this is read operation
app.get('/notes', async (req,res)=>{
    const allNotes = await noteModel.find()
    res.json({
        message: "Notes fetched !",
        allNotes
    })
})
// delete operation
app.delete('/notes/:id',async (req,res)=>{
    const noteId = req.params.id

    await noteModel.findOneAndDelete({
        _id : noteId
    })

    res.json({
        message: "note deleted !"
    })
})
// updating data
app.patch('/notes/:id',async (req,res)=>{
    const noteId = req.params.id
    const {title} = req.body
    await noteModel.findOneAndUpdate({
    _id : noteId
    },{
        title: title
    })

    res.json({
        message: "updated !"
    })
})

// below this we started server
app.listen(3000,()=>{
    console.log("server is started !");
})