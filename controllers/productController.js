const Product = require('../models/Product')
    //se maneja como promesa
async function addProduct(req, res) {
    try {
        const {
            name,
            size,
            unitaryPrice,
            imgUrl,
            description
        } = req.body
        const product = Product({
            name,
            size,
            unitaryPrice,
            imgUrl,
            description
        })
        const productStore = await product.save()
        res.status(201).send({ productStore })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

module.exports = {
    addProduct
}