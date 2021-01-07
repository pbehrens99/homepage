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

let user = 'John', age = 25, message = 'Hello';  // more convenient



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

alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

// boolean conversion

alert(Boolean(1)); // == true (1 = true)
alert(Boolean(" ")); // == true (" " = true)
alert(Boolean(0)); // == false (0 = false)
alert(Boolean("")); // == false ("" = false)


//typeof 

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function" (3)



// maths

// add
alert(5+5); // 10

// sub
alert(5-5); // 0;

// multiply
alert(5*5); // 25

// divide
alert(5/5); // 1

// exponentiation (hochzahl)
alert(5**3); // 5^3 bzw. 5*5*5 == 125

// remainder (Rest)
alert (5%2); // == 1 (2*2 = 4 + 1 = 5)



// operators 


// OR

let y;
alert(y || 'Y ist nicht definiert.');

let name    = 'John';
let age     = 25;


if (name == 'Johnny' || age == 25) {
    alert('true');   
}

// AND
let name    = 'John';
let age     = 25;

if (name == 'Johnny' && age == 25) {
    alert('true');   // wouldn't run
}

// ?? Variable defined or die => 'Anonymous/John'

let user;
alert(user ?? "Anonymous"); // Anonymous

let user = "John";
alert(user ?? "Anonymous"); // John


// while & for loops
let i = 0;
while (i <= 10) { // script will run a long as index is below ten OR ten
    alert(i);
    i++; // i = i + 1
}

// same shit, different way

let i = 0;
do {
  alert(i);
  i++;
} while (i <= 10);

// for loop
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
}

// SWITCH statement
let x = 3;
switch(x){
    case 1:
        break;
    case 2:
        break;
    case 4:
    case 5: // TWO CONDITIONS 
        alert('number is 4 or 5');
        break
    default:
        alert('none of those ');
}

// FUNCTIONS
function showMessage(msg = "No text given.") {
    alert(msg);
}
// run
showMessage(); // "No text given."
showMessage('Hello.'); // "Hello."


function errorMsg(){
    return 'Nooo text given.';
}
function showMessage2(msg = errorMsg()); {
    alert(msg);
}
showMessage2(); // "Nooo text given."
showMessage2('Hello.'); // "Hello."

// functions can also be defined like this
let showMessage3 = function(msg = errorMsg()) {

}

// IF CLAUSE

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

// is the same as: 

function ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    } else {
        no();
    }
  }

