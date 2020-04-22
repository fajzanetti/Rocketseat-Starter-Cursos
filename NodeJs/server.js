const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()

mongoose.connect('mongodb+srv://felipe:zanetti@cluster0-olkok.mongodb.net/starterNodeJS?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(3001)