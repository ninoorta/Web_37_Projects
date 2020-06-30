
let url = "/api/product?count=1"

window.onload = init;

async function init(e) {

    let res = await fetch(url);
    let count = await res.json();
    count = count.count

    console.log(count);

    if (!count) {
        throw new Error("Some thing wrong!")
    } else {

        let currentIndex = 1;

        pageSize = await getPageSize()
        showControls(count, pageSize)
        showTableContent(pageSize, currentIndex, e);

        document.getElementById('pageSize').onclick = async function () {

            pageSize = await getPageSize()
            console.log(pageSize);

            showControls(count, pageSize)

            showTableContent(pageSize, currentIndex, e);
        }

    }


}

async function showTableContent(pageSize, currentIndex, e) {
    e.preventDefault();

    let max = localStorage.getItem("max")

    if (currentIndex > max) {
        currentIndex = currentIndex - 1;
    }

    if (currentIndex == 0) {
        currentIndex = currentIndex + 1;
    }

    let url = `/api/product?pageSize=${pageSize}&pageIndex=${currentIndex}`
    let res = await fetch(url)
    let data = await res.json()
    console.log(data);

    console.log('current index:', currentIndex);

    let tableContentHTML = '';

    data.forEach(element => {
        tableContentHTML += `
        <tr>
        <th scope="row">${element._id}</th>
        <td>${element.title}</td>
      </tr>
        `
    });

    let arrPaginations = document.getElementsByClassName('pagination-items')

    for (let i = 0; i < arrPaginations.length; i++) {
        if (arrPaginations[i].innerHTML == currentIndex) {
            arrPaginations[i].className = 'current pagination-items'
        } else {
            arrPaginations[i].className = 'pagination-items'
        }
    }


    document.getElementById('body-content').innerHTML = tableContentHTML;


    document.getElementById('right').onclick = () => {
        showTableContent(pageSize, currentIndex + 1, event)
    }

    document.getElementById('left').onclick = () => {
        showTableContent(pageSize, currentIndex - 1, event)
    }


}

function showControls(count, pageSize) {

    document.getElementById('paginations').innerHTML = '';
    let paginationNumbers = Math.ceil(count / pageSize)
    console.log('pagination numbers:', paginationNumbers);

    localStorage.setItem("max", paginationNumbers);


    // Show pagination numbers

    for (let index = 1; index <= paginationNumbers; index++) {
        document.getElementById('paginations').innerHTML +=
        `
        <a class="pagination-items" href="" onclick=showTableContent(${pageSize},${index},event)>${index}</a>
        `

    }

    


}


function getPageSize() {
    let e = document.getElementById("pageSize");
    let pageSize = e.options[e.selectedIndex].value;

    console.log(pageSize);
    return pageSize
}