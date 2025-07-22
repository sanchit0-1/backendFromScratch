const express = require('express');
const app = express()

app.use(express.json()) // if we donot use this middleware we will get an undefined in terminal or console (terminal showing server started)
// here we will be checking these routes are working properly or not using postman (why postman : to get better experience )
// /home (routes)
// app.get('/home', (req, res) => {
//     res.send("this is home page")
// })

// // about page routes
// app.get('/about', (req, res) => {
//     res.send("this is about page")
// })

// from here we will learn what is rest api
// rest (representational state transfer) it uses HTPP methods : GET POST PATCH DELETE
// GET : If want to get data from server.
// POST : If want to send new data to the server[or creating new resources ]
// PATCH : to update data on the server
// DELETE : to remove data from the server.

// now here we will create a route and get data using postman 
// /about test & description
app.post('/about', (req,res) => {
    console.log(req.body) // we cannot read body data easily for this we will use a middle ware in upside line: 4 now go to postman .here if we goto browser we cannot give data to body element in req so we use postman as a frontend .
}) 
// here we will create notes routes such that we add notes and using res method json we will add message and show those notes
let notes = [];
app.post('/notes', (req,res) => {
    console.log(req.body);
    notes.push(req.body);
    res.json({
        "message": "note added !",
        "notes" : notes
    })
})
// now that is the end of day3


// here creating all routes then we start our server at end this is the way many devlopers do
app.listen(3000,()=> {
    console.log("your serrver started !");
})