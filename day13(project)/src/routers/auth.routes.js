//here we use controller as a component and use routes made in controller this file is used to make to know which routing is to be used.
//  here we will tell which api will work or will be in this folder.

//note first we require controller from there folder and use in this route as api
const {registrationController, loginController} = require('../controller/auth.controller')

const express = require('express');
const router = express.Router()

// here we use controler as api or router here

router.post('/register',registrationController)



router.post('/login', loginController)
 


module.exports = router;


// we build logic of api or route in controller and use in route file as router or api.