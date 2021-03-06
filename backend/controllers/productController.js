import Product from '../models/productsModel.js'
import asyncHandler from 'express-async-handler'

// @desc     GET all products
// @route    GET /api/products
// @access   Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    //throw new Error('Some Error!')
    res.json(products)
})



// @desc     GET single product
// @route    GET /api/products/:id
// @access   Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    //throw new Error('No product found')
    if(product) {
        res.json(product)
    }
    else {
        res.status(404)
        throw new Error('Product Not Found')
    }
})

export{
    getProducts,
    getProductById
}