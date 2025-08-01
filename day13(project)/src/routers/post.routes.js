const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model');

/**POST api protected. */
route.post('/', async (req , res)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"unauthorized !"
        })
    }
    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET)
    }
})