
let url = "/api/product?count=1"

window.onload = init;

async function init(e) {


    let res = await fetch(url);
    let count = await res.json();
    count = count.count

    // console.log(count);

    if (!count) {
        throw new Error("Some thing wrong!")
    } else {

        let currentIndex = 1;

        pageSize = await getPageSize()
        sortOption = await getSortOption();
        showControls(count, pageSize, sortOption)
        showTableContent(pageSize, currentIndex, e, sortOption);

        document.getElementById('pageSize').onclick = async function () {


            res = await fetch("/api/product?count=1");
            let newCount = await res.json();
            newCount = newCount.count

            pageSize = await getPageSize()
            sortOption = await getSortOption();
            // console.log(pageSize);

            showControls(newCount, pageSize, sortOption)

            showTableContent(pageSize, currentIndex, e, sortOption);
        }

        document.getElementById('sorts').onclick = async function () {
            sortOption = await getSortOption();

            // console.log(pageSize);
            // console.log(sortOption);

            showControls(count, pageSize, sortOption)

            showTableContent(pageSize, currentIndex, e, sortOption);
        }

    }




}

async function showTableContent(pageSize, currentIndex, e, sortOption) {
    e.preventDefault();

    let max = localStorage.getItem("max")

    if (currentIndex > max) {
        currentIndex = currentIndex - 1;
    }

    if (currentIndex == 0) {
        currentIndex = currentIndex + 1;
    }

    if (sortOption) {

    }

    sortOptionUrl = "&sortBy=title&sort=" + sortOption;

    // console.log(sortOption);


    let url = `/api/product?pageSize=${pageSize}&pageIndex=${currentIndex}${sortOptionUrl}`
    // console.log(url);

    let res = await fetch(url)
    let data = await res.json()
    console.log(data);

    console.log('current index:', currentIndex);

    let tableContentHTML = '';

    data.forEach(element => {
        tableContentHTML += `
        <tr>
        <th scope="row">${element._id}</th>
        <td class="title-value">${element.title}</td>
        <td>            
                <button type="button" id="${element._id}" class="btn btn-outline-warning btnUpdate" data-toggle="modal" data-target="#updateModal">
                   Update
                </button>
                <button type="button" id="${element._id}" class="btn btn-outline-danger btnDelete" data-toggle="modal" data-target="#deleteModal">
                Delete
             </button>
        </td>
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


    // console.log(sortOption);

    document.getElementById('right').onclick = () => {
        showTableContent(pageSize, currentIndex + 1, event, sortOption)
    }

    document.getElementById('left').onclick = () => {
        showTableContent(pageSize, currentIndex - 1, event, sortOption)
    }



    res = await fetch("/api/product?count=1");
    count = await res.json();
    count = count.count

    addEventAdd(count, pageSize, 1, e, sortOption)
    addEventUpdate(count, pageSize, currentIndex, e, sortOption)
    addDeleteEvent(count, pageSize, currentIndex, e, sortOption)

}

function showControls(count, pageSize, sortOption) {

    document.getElementById('paginations').innerHTML = '';
    let paginationNumbers = Math.ceil(count / pageSize)
    console.log('pagination numbers:', paginationNumbers);

    localStorage.setItem("max", paginationNumbers);


    // Show pagination numbers

    for (let index = 1; index <= paginationNumbers; index++) {
        document.getElementById('paginations').innerHTML +=
            `
        <a class="pagination-items" href="" onclick=showTableContent(${pageSize},${index},event,"${sortOption}")>${index}</a>
        `

    }




}


function getPageSize() {
    let e = document.getElementById("pageSize");
    let pageSize = e.options[e.selectedIndex].value;

    // console.log(pageSize);
    return pageSize
}

function getSortOption() {
    let e = document.getElementById("sorts");
    let selectedOption = e.options[e.selectedIndex].value

    // console.log(selectedOption);
    return selectedOption
}


async function addEventAdd(count, pageSize, currentIndex, e, sortOption) {
    document.getElementById('title').value = '';
    let btnAddSubmit = document.getElementById('addBtnSubmit')

    btnAddSubmit.onclick = () => {
        createProduct(count, pageSize, currentIndex, e, sortOption)
    }
}

async function addEventUpdate(count, pageSize, currentIndex, e, sortOption) {
    let btnUpdate = document.getElementsByClassName('btnUpdate')

    let btnUpdateSubmit = document.getElementById('updateBtnSubmit')


    for (let i = 0; i < btnUpdate.length; i++) {
        let id = btnUpdate[i].id;
        btnUpdate[i].onclick = () => {
            let values = document.getElementsByClassName('title-value');
            // console.log(values[i]);
            
            document.getElementById('title-update').value = values[i].innerHTML
            document.getElementsByClassName('modal-footer-update')[0].setAttribute("id", `${id}`)
        }
    }

    btnUpdateSubmit.onclick = () => {
        updateProduct(count, pageSize, currentIndex, e, sortOption)
    }


}

async function addDeleteEvent(count, pageSize, currentIndex, e, sortOption) {
    let btnDelete = document.getElementsByClassName('btnDelete')

    // numberOfProducts = await getPageSize()

    let btnDeleteSubmit = document.getElementById('deleteBtnSubmit')

    for (let i = 0; i < btnDelete.length; i++) {
        let id = btnDelete[i].id;
        btnDelete[i].onclick = () => {
            document.getElementsByClassName('modal-footer-delete')[0].setAttribute("id", `${id}`)
        }
    }

    btnDeleteSubmit.onclick = () => {
        deleteProduct(count, pageSize, currentIndex, e, sortOption)
    }

}





