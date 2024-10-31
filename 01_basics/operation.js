

/*
When using the + operator between a string and a number, JavaScript converts the number to a string and concatenates the values.

If multiple operands are involved, JavaScript evaluates from left to right:

*/

//1.Addition

console.log(typeof("1"+1))   //11
console.log(typeof(1+"1"))   //11
console.log(typeof("1"+1+1)) //111
console.log(1+"1"+1) //111
console.log(1+2+"1")  //31



/*
The - operator does not perform concatenation. Instead, it forces JavaScript to treat both operands as numbers.

If either operand is a string, JavaScript tries to convert it to a number before performing the subtraction.
 */



//2.Substraction
console.log("1"-1)   //0
console.log(1-"1")   //0
console.log(typeof("1"-1+1)) //1
console.log(1+"1"+1) //3
console.log(1-2+"1")  //-11
console.log(5+1-7+"50"-10)//-160


console.log(+true)
console.log(+'')