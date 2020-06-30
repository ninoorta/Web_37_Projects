const baseUrl = '/api'
const workApiUrl = `${baseUrl}/product`



async function deleteProduct(id){

    let res = await fetch(`${workApiUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  
    let deletedProduct = await res.json()
    console.log(deletedProduct);
    
    // loadTable()
  
  }
  