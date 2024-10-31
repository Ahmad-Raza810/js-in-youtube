let MyName="Ahmad"
let age=18
let isCoder=true




/**Primitive data types */

//String(single or double quotes)
//number(a range)
//bigint
//boolean
//null=>standalone value
//undefind=>not initilize
//symbol=>unique


/**non-Primitive data types */

//object


//console.log(typeof(""))
//console.log(typeof NaN)

let age1 = 30; // Integer
let price = 19.99; // Floating-point
let inf = Infinity; // Positive infinity
let notANumber = NaN; // Result of invalid math operations like 0/0
console.table([age1,price,inf,notANumber])

console.log(typeof 42);            // "number"
console.log(typeof "Hello");       // "string"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object" (this is a quirk in JavaScript)
console.log(typeof Symbol("id"));  // "symbol"
console.log(typeof person);        // "object"
console.log(typeof add);           // "function"
