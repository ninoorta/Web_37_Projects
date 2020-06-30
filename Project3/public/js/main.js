
let url = "/api/product?count=1"

window.onload = init;

async function init(e) {

    let res = await fetch(url);
    let count = await res.json();
    count = count.count

    console.log(count);
    
    if(!count){
        throw new Error("Some thing wrong!")
    } else {
        pageSize = 5;

        showControls(count, pageSize)

        showTableContent(pageSize, 1, e);
    }

    console.log('start running!')

}

async function showTableContent(pageSize, pageIndex, e) {
    e.preventDefault();

    let url = `/api/product?pageSize=${pageSize}&pageIndex=${pageIndex}`
    let res = await fetch(url)
    let data = await res.json()
    console.log(data);


    let tableContentHTML = '';

    data.forEach(element => {
        tableContentHTML += `
        <tr>
        <th scope="row">${element._id}</th>
        <td>${element.title}</td>
      </tr>
        `
    });

    document.getElementById('body-content').innerHTML = tableContentHTML;

}

function showControls(count, pageSize) {
    
    document.getElementById('paginations').innerHTML = '';
    let paginationNumbers = Math.ceil(count / pageSize)


    // Show pagination numbers
    for (let index = 0; index < paginationNumbers; index++) {
        document.getElementById('paginations').innerHTML += `
        <a href="" onclick=showTableContent(${pageSize},${index},event)>${index + 1}</a>
        `
    }
}