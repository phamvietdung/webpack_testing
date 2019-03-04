//import * as button from "!style-loader!css-loader!../src/css/button.css";

import * as button from "../src/css/button.css";

const people = require('../src/js/people.js');

const location = require('../src/js/location.js');

//const $ = require('jquery');

people.getname();

location.cities.forEach(function(item, index){
    console.log(item);
})

var tmp = [1,2,5,4,2,3,6,45];

var rs = tmp.filter(x => x > 3).join('-');

console.log(rs);