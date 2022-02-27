const path = require('path')
const fs = require('fs')

const dataFilePath = path.resolve(__dirname, 'lists.json')

// read all list to do in file lists.json and return

async function listsToDo(){
    let dataString = fs.readFileSync(dataFilePath, "utf8")
    return JSON.parse(dataString)
}


// add new one to lists to do, overwrite lists to do to file

async function createListToDo(newList){
    let lists = await listsToDo()
    lists.push(newList)
    
    let dataString = JSON.stringify(lists)
    fs.writeFileSync(dataFilePath, dataString)
    return newList
}



// Just delete all the lists 
async function clearLists(){
    fs.writeFileSync(dataFilePath, '[]')
}


module.exports = {
    listsToDo,
    createListToDo,
    clearLists
}