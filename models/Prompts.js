const mongoose = require('mongoose')
const { Schema, model } = mongoose

const promptSchema = new Schema({
    prompt: String
})

const Prompt = model('Prompt', promptSchema)
module.exports = Prompt