// jQuery run-up

$(document).ready(function(){

});




// store variables
/* "-" / latin letters aren't allowed in variable names. They also can't start with a digit */

let message; // new version
message     = 'Content';

var message2; // old version
message2    = 'Content';

let user, age, message;
user        = 'John'; // STRING
age         = 25; // INT
message     = 'Hello'; // STRING

let user = 'John', age = 25, message = 'Hello';  // more convenient+



// fixed variables (constants)

const name = 'Philipp', birthday = '08.01.1999';
name = 'Phil' // wouldnt work because it's a constant

/* EXAMPLE FOR USE */
const COLOR_BLUE    = '#00F';
const COLOR_RED     = '#F00';



// embed variables

let fullname = 'John Wayne';
console.log(`The name is ${fullname}`); // ` ` instead of ' ' or " "



// boolean
let isGreater = 4 > 1;
alert(isGreater) // true

let isSmaller = 4 < 1;
alert(isSmaller); // false