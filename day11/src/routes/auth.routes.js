const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const router = express.Router()

/**
 * POST/ register
 * POST / login
 * GET/ user (protected)
 */
router.post('/register', async (req, res)=>{
    const {username, password} = req.body

// suppose in case if same username is used terminal will throw an error for which we will try to give res for that problem 
    const preUser = await userModel.findOne({username})
    // condition checking is user exists or not
    if(preUser){ // now this will make a conflict and end the res terminal
        return res.status(409).json({ 
            message:"already a user exists !" 
        })
    }
    const user = await userModel.create({username, password})
    const token = jwt.sign({
        id:user._id
    }, process.env.JWT_SECRET)

    
    res.status(201).json({
        message: "user created !",
        user
    })
})


module.exports = router;