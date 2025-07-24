const express = require('express');
const app = express();
app.use(express.json()) // here we have to use this middle ware to show data on postman because express doesnot read directly.
// here we will create routes to make notes and get data and show it again on client side.

let notes = [];
app.get('/about', (req,res)=>{
    res.json(notes)
})

app.post('/about', (req,res)=>{
    notes.push(req.body)
    res.json({
        message: "note added!"
    })
})


// now we are making route to delete data form the server using DELETE method.
app.delete('/notes/:index', (req,res) =>{ // here : says that there is going to be a dynamic value
    const index = req.params.index
    delete notes[index]
    res.json({
        message: "note deleted! "
    })
})

// new here we will update user data using PATCH method
//here we will make a route of /notes/:index here index is dynamic
app.patch('/notes/:index', (req,res)=>{
    const index = req.params.index;
    const {title} = req.body;

    notes[index] = title;
    res.json({
        message: "updated"
    })
})



app.listen(3000,() => {
    console.log("server started at port 3000!")
})