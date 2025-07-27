const express = require('express')
const app = express();
const router = require("./routes/auth.route")
app.use(express.json())

app.use('/auth', router)



module.exports = app