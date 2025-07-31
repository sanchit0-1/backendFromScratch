const express = require('express')
const authRoute = require('./routers/auth.routes');
const cookieParser = require('cookie-parser');

const app = express()
//middleware
app.use(cookieParser())
app.use(express.json());




app.use('/api', authRoute)




module.exports = app;