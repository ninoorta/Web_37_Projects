const arr = [1, 3, 4]
for (const element of arr) {
    console.log(element)
}

let i = 0;
console.log('result', i < 3 ? true : i === 3 ? 'i equal 3' : false)


//     for(let k = 0; k < 5; k++){
//         setTimeout( function () {
//             console.log(k)
//         } , 500 )
//     }

//     for(var k = 0; k < 5; k++){
//         setTimeout( function () {
//             console.log(k)
//         } , 500 )
//     }

// let j = 0;
// while(j < 5) {
//     console.log(j);
//     setTimeout(function() {
//              j++;
//          }, 500)
// }
let j = 0;

let interval = setInterval(function () {
    console.log(j++)
    if(j >=5) {
        clearInterval(interval)
    }
}, 500)



