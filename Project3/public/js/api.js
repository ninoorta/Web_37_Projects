const baseUrl = '/api'
const productApiUrl = `${baseUrl}/product`
const signInApiUrl = `/api/auth/sign-in`



async function createProduct(count, pageSize, currentIndex, e, sortOption) {
    let data = {
        title: document.getElementById('title').value
    }


    // --------------------Get access token every time---------------------
    let signIn = {
        "email": "blackcathp9x@gmail.com",
        "password": "123456"
    }

    let res = await fetch(signInApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signIn)
    })

    let result = await res.json();
    let accessToken = result.accessToken;
    //  ---------------------------------------------------------------------


    res = await fetch(productApiUrl, {
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

    // --------------------Get access token every time---------------------
    let signIn = {
        "email": "blackcathp9x@gmail.com",
        "password": "123456"
    }

    let res = await fetch(signInApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signIn)
    })

    let result = await res.json();
    let accessToken = result.accessToken;
    //  ---------------------------------------------------------------------

    res = await fetch(productApiUrl, {
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

    // --------------------Get access token every time---------------------
    let signIn = {
        "email": "blackcathp9x@gmail.com",
        "password": "123456"
    }

    let res = await fetch(signInApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signIn)
    })

    let result = await res.json();
    let accessToken = result.accessToken;
    //  ---------------------------------------------------------------------

    res = await fetch(`${productApiUrl}/${id}`, {
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

