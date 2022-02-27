const fs = require('fs');

function sum(a, b) {
    console.log(arguments);      // biến mặc định   = [valueA, valueB]
    return a + b;
}

// 1. arguments   ( inputs of function)
// console.log(sum.length)      // ~ numbers arguments = 2
// sum(1, 2)

console.log(1, 2, 3, 4);

function log(...dataToLog) {            // ...Biến   = let dataToLog = arguments  , quick way
    dataToLog.forEach(element => {
        console.log(element)
    });
}

// log(1, 2, 3, 4, 5)

let data = [1, 2, 3, 4, 5];
// log(data)
log(...data);

// 2. Callback function vs Async function vs Sync function
// async function: async function returns a Promise
// callback function: async function requires a callback


//  callback function

// function doTask(callback) {
//     console.log('doing task!');
//     callback();
// }

// doTask(function () {
//     console.log('done');
// });

// fs.readFile('C:\Users\admin\Desktop\Web37\session5\server.js',
//     function (err, fileContent) {
//         console.log('error', err);
//         console.log('fileContent', fileContent)
//         // console.log('read file done!')
//         // console.log('data', fileContent.toString());
//     }
// );

// async / await: await is only available when you place it before an promise
// async function
function readFileAsync(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, fileContent) {
            if (err) {
                reject(err)
            } else {
                resolve(fileContent);
            }
        })
    })
}

async function run() {
    let file1 = await readFileAsync('C:\Users\admin\Desktop\Web37\session5\note.txt');
    console.log(file1);
}

// run();



// let promise1 = new Promise(function (resolve, reject) {
//     let random = parseInt(Math.random() * 10);
//     if (random % 2 == 0) {
//         resolve();
//     } else {
//     }
//     reject(new Error('Number must be event', random));

// })

// put await in front of promise
// let number = await promise1;



// 3. Pure function vs Impure function
// Pure function: return only 1 result.
function minus(a, b) {
    return a - b;
}

//  impure function : with 1 input => return many outputs
let number = 0;
function sumImpure(a) {
    number = number + a;
    console.log(number);
    return number;
}

sumImpure(1)    // 1
sumImpure(1)    // 2
sumImpure(1)    // 3
sumImpure(1)    // 4

// 3. this vs .bind()
// .bind() giữ nguyên this 
function printThis() {
    console.log(this);
}

printThis();  // global

let containerA = {
    name: 'A',
    printThis: printThis
}

containerA.printThis();     // {name: "A"}     
let containerB = {
    name: "B",
    printThis: printThis.bind(containerA)
}

containerB.printThis();     // {name: "A"}

// 4. arrow function
// const multiply = function (a, b) {
//     return a * b;
// }

// const multiply = (a, b) => {
//     return a * b;
// }

const multiply = (a, b) => console.log(this)       // auto bind this
multiply();

const containerX = {
    name: 'X',
    multiply: multiply
}

containerX.multiply();

const containerY = {
    name: "Y",
    multiply: multiply
}

containerY.multiply();
