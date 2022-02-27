// callback function
function originalFunction (cb) {
    cb();
}

function callbackFunction() {
    console.log('This is callback function!')
}

originalFunction(callbackFunction);

setTimeout(function() {
    console.log('Print after  1s');
},  1000)


