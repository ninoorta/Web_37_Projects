import $ from 'jquery';
import {deflateSync, inflateSync} from 'zlib'
import './main.css'

$(window).on('load', () => {
    console.log("jquery using success!");
})

let str = 'gfljddljfgljjghldjhdjghjfklgjkldjklsdjfljsdlfjdslfjlsdjflkjaoiwerjoaiejlsadfjlfjlfjadlkfjalkfjs'
let strZipped = deflateSync(str).toString('base64')
console.log('after zipped:', str.length, strZipped.length);


console.log("hello");
