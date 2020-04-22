const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    async index(req, res) {
        // INDEX utilizado para listar tudo de PRODUCT
        const products = await Product.find()

        return res.json(products)
    }
}