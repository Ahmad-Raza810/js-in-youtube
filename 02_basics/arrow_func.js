/* let obj={
    name:"john",
    age:19,
    welcomeInfo:function() {
      //.log(`Welcome ${this.name}`)
     // console.log(this);
    },
      
} */


/* let {welcomeInfo:objFunction}=obj
objFunction()
obj.welcomeInfo() */
//console.log(this);
//this thing an empty object below at this time it is not pointing to any one .there is no global object.

/* let cube=(a)=>{
    return a*a*a
} */

 

//add two number
/* let addTwo=(a,b)=>(a+b)


//square of a number
let square= a => a*a

console.log(addTwo(2,3))
console.log(square(2))
console.log(cube(2))
 */

//IIFE(Immediately INvoked Function Expression)
//to protect function from polluted global enviornment

(function coffie() {
    console.log("DB CONNECTION 1ST  SUCCESFULLY");
})();

(function chai() {
    console.log("DB CONNECTION 1ST  SUCCESFULLY 2");
})()
