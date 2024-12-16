const express = require('express')
const router = express.Router()
const Prompt = require('../models/Prompts')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/prompts', async (req, res) => {
    const prompts = await Prompt.find();
    res.send(JSON.stringify(prompts));
})

router.get('/three', (req, res) => {
    res.render('three')
})

module.exports = router