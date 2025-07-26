const mongooose = require('mongoose')

const noteSchema = new mongooose.Schema({
    title: String,
    content: String,
})

const noteModel = mongooose.model("notess", noteSchema)
module.exports = noteModel;