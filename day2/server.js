const express = require('express') // here we import express
const app = express() // here made the server 
app.get('/',(req,res)=> { // now this is called route  such more route collection is called api.
    res.send([1,3,4,5,5,3])// here when we load search this http://localhost:3000/ then client or browser will send a req to the api and in response it will send data like res.send("hello !")
})
// when a user or client access any routes it send a req to the routes containing data in following
// req.body
// req.query
//req.params
// req.headers and req.cookies in these both we are saving giving credential data.

// here res is used to send data in exchange of req to the client 
// object used to send data to the client
// methods are res.send() res.json() res.status()

// what is API ?
// Application Programming Interface is a way for two applicant to communicate with each other.
// how communication happens doesnot matter - no strict rule and structure is needed.


// here we will learn how rest api is used 
// What is rest api ?
// what rest(representational state transfer) api says that it is making some sets of rule on which we are going to communicate two application.
// it uses http method (GET , POST , PUT , DELETE ) for communication.
//now install postman form https://postman.com 



app.listen(3000,()=>{ // here we started our server now when we run cmd (node server.js) the server will start and can be access in http://localhost:3000/
    console.log("server started !");
})