const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()

mongoose.connect('mongodb+srv://felipe:zanetti@cluster0-olkok.mongodb.net/staterNodeJS?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

requireDir('./src/models')

const Product = mongoose.model('Product')

app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    })
    return res.send('Teste')
})

app.listen(3001)