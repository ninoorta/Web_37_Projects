// npm ~ node package manager

// using lodash library to resolve array , object , ...
const _ = require('lodash');

let array = [1, 2, [3, 4], 5]   // [1, 2, 3, 4, 5 ]

let arrayFlattened = _.flatten(array);
console.log(arrayFlattened);

let sum = _.sum(arrayFlattened);
console.log(sum);

let sum2 = _.sumBy([
    { age: 19},
    { age: 12},
    { age: 14},
    { age: 25}
], (item => item.age));

console.log(sum2);

let obj = {
    a:{
        b:{
            c:{
                d: 1
            }
        }
    }
}

// let value = obj.a.b.c.d;
let value = _.get(obj, 'a.b.c.d');
console.log(value);

