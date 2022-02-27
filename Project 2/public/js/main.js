// call to api GET /product
let url = `/api/product`

async function load() {
    let res = await fetch(url)
    let listProducts = await res.json()
    console.log('list product', listProducts);


}

load()