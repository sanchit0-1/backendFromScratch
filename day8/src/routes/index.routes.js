const express = require('express')
const router = express.Router() //this is router 

router.use('/',(req,res,next)=>{
    console.log("this is the middleware b/w router and api")
    next()
})

router.get('/', (req,res)=>{    // this is api
    res.json({
        message: "wellcome to the cohot !"
    })
})

module.exports = router;