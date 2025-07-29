const express = require('express')
const app = express()
const cookieParser = require('cookieparser')
const authRoute = require('./routes/auth.routes')

app.use(express.json())

app.use('/auth', authRoute)



module.exports = app;