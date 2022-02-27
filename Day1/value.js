// Primitive value
var string = new String();
// variable string  = object
console.log(typeof(string));
string = 'abc';

let array  = [1,2,"abc",5]
array.map(function(element,index) {
    return element*2;
})
console.log(array);
array.forEach(function(element,index) {
    return element ++;
})
console.log('array',array);
console.log('array of numbers', array.filter(function (element) {
    return typeof element === 'number';
}))

// String
string.toUpperCase()
string.trim()
string.substr(1)

// number
var number = 1.33333;

console.log(typeof number.toString())
console.log(typeof number )

console.log(number.toFixed(2))

// Date
var today = new Date()
