const baseUrl = '/api'
const productApiUrl = `${baseUrl}/product`



async function createProduct(count, pageSize, currentIndex, e, sortOption) {
    let data = {
        title: document.getElementById('title').value
    }

    let accessToken = `
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWUwZjY4MTUxNDk0MDFkYjhiMWMzNDkiLCJlbWFpbCI6ImJsYWNrY2F0aHA5eEBnbWFpbC5jb20iLCJuYW1lIjoiVHVhbiIsInN0YXRlIjoiYXZhaWxhYmxlIiwiX192IjowLCJpYXQiOjE1OTM1OTYwMDgsImV4cCI6MTU5MzYxNzYwOH0.GvuyFPaSNjyCXVpZmIR6yPK1frVZHXwlMT9mrBz5C2Q
    `

    let res = await fetch(productApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(data)
    })

    let newProduct = await res.json()
    console.log(newProduct);

    showControls(count + 1, pageSize, sortOption)

    showTableContent(pageSize, currentIndex, e, sortOption);

    return newProduct
}

async function updateProduct(count, pageSize, currentIndex, e, sortOption) {
    let chosenID = document.getElementsByClassName('modal-footer-update')[0].attributes.id.value

    console.log(chosenID);
    
    let data = {
        _id: chosenID,
        title: document.getElementById('title-update').value
    }

    let accessToken = `
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWUwZjY4MTUxNDk0MDFkYjhiMWMzNDkiLCJlbWFpbCI6ImJsYWNrY2F0aHA5eEBnbWFpbC5jb20iLCJuYW1lIjoiVHVhbiIsInN0YXRlIjoiYXZhaWxhYmxlIiwiX192IjowLCJpYXQiOjE1OTM1OTYwMDgsImV4cCI6MTU5MzYxNzYwOH0.GvuyFPaSNjyCXVpZmIR6yPK1frVZHXwlMT9mrBz5C2Q
    `
    let res = await fetch(productApiUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(data)
    })


    let updatedProduct = await res.json()
    console.log(updatedProduct);


    showControls(count, pageSize, sortOption)

    showTableContent(pageSize, currentIndex, e, sortOption);

    return updatedProduct

}

async function deleteProduct(count, pageSize, currentIndex, e, sortOption) {

    let id = document.getElementsByClassName('modal-footer-delete')[0].attributes.id.value;
    let accessToken = `
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWUwZjY4MTUxNDk0MDFkYjhiMWMzNDkiLCJlbWFpbCI6ImJsYWNrY2F0aHA5eEBnbWFpbC5jb20iLCJuYW1lIjoiVHVhbiIsInN0YXRlIjoiYXZhaWxhYmxlIiwiX192IjowLCJpYXQiOjE1OTM1OTYwMDgsImV4cCI6MTU5MzYxNzYwOH0.GvuyFPaSNjyCXVpZmIR6yPK1frVZHXwlMT9mrBz5C2Q
    `
    let res = await fetch(`${productApiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })

    let deletedProduct = await res.json()
    console.log(deletedProduct);


    showControls(count - 1, pageSize, sortOption)

    showTableContent(pageSize, currentIndex, e, sortOption);

}

