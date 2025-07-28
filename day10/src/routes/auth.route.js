const express = require('express');
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const router = express.Router();

// this is register api
router.post('/register',async (req,res)=>{
    const {username, password} = req.body;
    
    const user = await userModel.create({username,password})
    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(201).json({
        message: "user registered",
        user
    })
})
// this is login api
// router.post('/login',async (req,res)=>{
//     const {username,password} = req.body
//     const user = await userModel.findOne({
//         username: username
//     })
//     if(!user){ // here we are using return so that it will end the code in that block and donot execute remaining conditional statement;
//         return res.status(401).json({
//             message: "user account not found !"
//         })
//     }
//     const passwordValid = password == user.password
//     if(!passwordValid){
//         return res.status(401).json({
//             message: "invalid password !"
//         })
//     }
//     res.json({
//         message: "user logged in !"
//     })
// })


router.post('/login', async (req, res) => { //detailed login api
    const { username, password } = req.body;

    // 1. Find the user in the database
    const user = await userModel.findOne({ username: username });

    // 2. Check if user exists
    if (!user) {
        // If user is NOT found:
        // - Set HTTP status to 401 (Unauthorized)
        // - Send a JSON response indicating the user was not found
        return res.status(401).json({ message: "user account not found !" });
        // The `return` keyword here is crucial. It immediately exits this `async` function.
        // No further code within this `router.post` callback will execute for this request.
    }

    // 3. If user exists, compare passwords
    const passwordValid = password == user.password; // Note: In a real app, use bcrypt for password hashing
                                                   // and comparison (e.g., await bcrypt.compare(password, user.password))

    // 4. Check if password is valid
    if (!passwordValid) {
        // If password is NOT valid:
        // - Set HTTP status to 401 (Unauthorized)
        // - Send a JSON response indicating an invalid password
        return res.status(401).json({ message: "invalid password !" });
        // Again, `return` immediately exits the function.
        // The success response below will not be sent.
    }

    // 5. If both user found and password valid (only reached if previous conditions were false):
    // - Send a 200 OK (default status) JSON response indicating successful login
    res.json({ message: "user logged in !" });
    // This is the only response sent if the login is successful.
});

router.get('/user',async (req, res)=>{
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({
            message: "unaurtharised"
        })
    }
    try 
    {const decode = jwt.verify(token, process.env.JWT_SECRET)
    
    const user = await userModel.findOne({
        _id:decode.id
    }).select("-password" ).lean()
    res.status(201).json({
        message: "user fetched !",
        user
    })
    }catch(err){
        return res.json({
            message: "unauthorized invalid token !"
        })
    }
})

module.exports = router;