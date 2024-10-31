//Number() conversion

//string check up
let check1=Number("123")
console.log(check1,typeof check1)

let check2=Number("44.99")
console.log(check2,typeof check2)

let check3=Number("hello")
console.log(check3,typeof check3)

let check4=Number("   ")
console.log(check4,typeof check4)

let check5=Number("1dwwxw23")
console.log(check5,typeof check5)

let check6=Number(7973)
console.log(check6,typeof check6)
//string check up end


//boolean chech up 
let b1=Number(true)
console.log(b1,typeof b1)

let b2=Number(false)
console.log(b2,typeof b2)
//boolean end

//null and undefined
let n=Number(null)
console.log(n,typeof n)

let n1=Number(undefined)
console.log(n1,typeof n1)
//null and undfined end

Number({});         // NaN
Number({ key: 1 }); // NaN





// 1. Numbers

// Number to string conversions are straightforward
console.log(String(123));       // "123"
console.log(String(45.67));     // "45.67"
console.log(String(-89));       // "-89"
console.log(String(Infinity));  // "Infinity"
console.log(String(NaN));       // "NaN"



// 2. Booleans


// Boolean values convert to "true" or "false"
console.log(String(true));      // "true"
console.log(String(false));     // "false"




// 3. null and undefined


// `null` and `undefined` convert to their string names
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"




// 4. Objects


// Objects convert to strings based on their type or their `toString()` method
console.log(String({}));                 // "[object Object]"
console.log(String({ key: "value" }));   // "[object Object]"
console.log(String(new Date(2023, 0, 1))); // "Sun Jan 01 2023 ..." (date string format)



// 5. Arrays


// Arrays convert to a comma-separated string of their elements
console.log(String([1, 2, 3]));       // "1,2,3"
console.log(String(["a", "b", "c"])); // "a,b,c"
console.log(String([]));              // "" (empty string for empty array)




// 6. Special Values


// Empty values like empty strings and whitespace strings behave as they are
console.log(String(""));          // "" (already a string)
console.log(String("   "));       // "   " (whitespace string remains the same)
console.log(String("Hello123"));  // "Hello123" (stays as a string)
console.log(String([null]));      // "null"



// 1. Numbers
// Numbers convert to `true` if they are non-zero, and `false` if they are `0` or `NaN`.
console.log(Boolean(123));       // true
console.log(Boolean(-45.67));    // true
console.log(Boolean(0));         // false
console.log(Boolean(NaN));       // false




// 2. Strings
// Non-empty strings convert to `true`, while empty strings convert to `false`.
console.log(Boolean("Hello"));   // true
console.log(Boolean(" "));       // true (space character counts as non-empty)
console.log(Boolean(""));        // false (empty string)




// 3. Booleans
// Boolean values retain their original `true` or `false` values.
console.log(Boolean(true));      // true
console.log(Boolean(false));     // false



// 4. null and undefined
// `null` and `undefined` are both treated as `false`.
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false



// 5. Objects
// All objects, including empty objects, are `true`.
console.log(Boolean({}));                  // true (empty object)
console.log(Boolean({ key: "value" }));    // true (non-empty object)
console.log(Boolean(new Date()));          // true (Date object)



// 6. Arrays
// All arrays, including empty arrays, are `true`.
console.log(Boolean([1, 2, 3]));           // true (non-empty array)
console.log(Boolean([]));                  // true (empty array)



// 7. Special Values
// Special values like Infinity and empty arrays behave as follows:
console.log(Boolean(Infinity));            // true (Infinity is treated as a truthy value)
console.log(Boolean(-Infinity));           // true (negative Infinity is also truthy)
console.log(Boolean([null]));              // true (array with null is truthy)
