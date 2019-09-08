const express = require('express')
const upload = require('../libs/storage')
const { addProduct } = require('../controllers/productController')

const api = express.Router()



api.post('/products', upload.single('imgUrl'), addProduct)

module.exports = api