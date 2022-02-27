// call to api GET /list
let url = `/api/list`

async function load() {
    let res = await fetch(url)
    let listsToDo = await res.json()
    console.log('lists to do:', listsToDo);

    let arrWork = document.getElementsByClassName('work')
    let arrTime = document.getElementsByClassName('time')
    let arrStatus = document.getElementsByClassName('status')
    
    console.log(
        arrWork, arrTime, arrStatus
    );


    
}

load();



function firstLoad(){
    let html = ``;

    for(let i = 0; i < listsToDo.length; i++){
        
    }
}

