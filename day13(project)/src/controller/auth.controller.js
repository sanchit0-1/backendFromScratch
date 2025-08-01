// they are used as component and reusable code it make code clean and same set of code can be used so many times
// here we will do crud operations so we have to require userModel
const userModel = require('../models/user.model')
//we to create token aswell so use jwt
//using bcrupt to hash first require
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
// this is registered api;
async function registrationController(req,res){
    const {username, password} = req.body;
    const isuser = await userModel.findOne({username})
    if(isuser){
        return res.status(400).json({message: "user already exists"});
    } // if user doesnot exists then we will create
    const user = await userModel.create({
        username,
        password: await bcrypt.hash(password,10)
    })

    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
    res.cookie("token", token)

    return res.status(201).json({message: "user registered !", user})
}

//this is logging controller
async function loginController(req,res){
    const {username, password} = req.body;
    const user = await userModel.findOne({
        username
    })
    if(!username){
        return res.status(400).json({message: "user not found"});
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(400).json({message: "invalid password !"})
    }
    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
    // sending token to cookie
    res.cookie("token", token);
    // now sending response

    res.status(200).json({
        message: "user logged in !",
        user: {
            username: user.username,
            id: user._id
        }
    })
}


module.exports = {
    registrationController,
    loginController
}