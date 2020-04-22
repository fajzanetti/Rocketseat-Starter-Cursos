const express = require('express')

const routes = express.Router()

const ProductController = require('./controllers/ProductController')

routes.get('/product', ProductController.index)

module.exports = routes