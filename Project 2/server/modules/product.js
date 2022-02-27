const path = require('path')
const fs = require('fs')

const dataFilePath = path.join(__dirname, 'products.json')


// read all products in file then return

async function listProducts(){
    // return []
    let dataString = fs.readFileSync(dataFilePath, "utf8")
    return JSON.parse(dataString)
}

// add newProduct to list Products, overwrite list products to file
// {{}} product
async function createProduct(newProduct){
    // return newProduct
    let list = await listProducts();
    list.push(newProduct);

    let dataString = JSON.stringify(list)
    fs.writeFileSync(dataFilePath, dataString)
    return newProduct
}

async function clearProducts(){
    fs.writeFileSync(dataFilePath, '[]')
}

module.exports = {
    listProducts,
    createProduct,
    clearProducts
}