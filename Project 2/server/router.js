const express = require('express')

const router = new express.Router()
// listProduct() >> return array of products
// createProduct(newProduct) >> return created product
const {
    listProducts,
    createProduct,
    clearProducts
} = require('./modules/product')

// localhost:9000/api/api1
router.get('/product', async (req, res, next) => {
    // res.send('api1')
    try {

        let products = await listProducts()
        console.log(products);

        res.json(products);

    } catch (err) {
        next(err)
    }
    // get data
    // validate data
    // process data
    // send response
})


// localhost:9000/api/api2
router.post('/product', async (req, res, next) => {
    // res.send('api2')
    try {
        let newProduct = req.body
        let createdProduct = await createProduct(newProduct);
        res.json(createdProduct)
    } catch (err) {
        next(err)
    }
})

router.delete('/product', async (req, res, next) => {
    await clearProducts()
    res.json([])
})


module.exports = router