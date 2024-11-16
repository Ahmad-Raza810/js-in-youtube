// act as a var scope

/*
check=10

{

    console.log(check);
    check=20
}

console.log(check);

*/


//hoisting

/* console.log(myvar);//undefined

var myvar=10 */

//dynamically typed language


  /*    
vara=-Infinity
vara2=Infinity

console.log(vara2+vara);
 */


/* 
let myfunc=function(l="guest"){
    console.log(l);
    //string interpolation
    return `hello ${l}`
}

console.log( myfunc( ));
*/

//memory allocatin 
//for primitive = >stack memoruy allocation

//for non-primitive =>heap memory 


/* let pri=10
let pri2=pri
pri2=pri2+10
console.log(pri,pri2);


let objcheck={
 name:"Raza",
 id:5
}

console.log(objcheck);

let objcheck2=objcheck
console.log(objcheck2);

objcheck2.name="Ahmad"

console.log(objcheck,"\n",objcheck);
 */

/* let myname=new String("ahmad")
console.log(myname, typeof myname)

myname2="ahmad"

console.log(myname, typeof myname);

if (myname===myname2) {
    console.log("ok");
    
}
else
console.log("hm");

 */

let yrdate=new Date()
console.log(yrdate);

/* console.log(yrdate.toString())
console.log(yrdate.toLocaleString())
console.log(yrdate.toDateString())
 */

 /* ar=new Array(1,2,3,4,5,6,7,"hello",NaN)
 console.log(ar,typeof ar);
 
 ar.pop()
 console.log(ar);

 ar.shift()
 console.log(ar);
  */
 let obj1={
    store_name:"rijvi store",
    cat:"kirana and genral",
 }
 obj1.opening_date=new Date("2006-08-20")
console.log(obj1);

let obj2={
  customer_name:"Alice",
  isRegular:true,
  pay_type:"Cash"
}

 obj3={...obj1,...obj2}
 console.log(obj3);

 console.log(Object.keys(obj1));
 console.log(Object.values(obj1))
 console.log(Object.entries(obj1));
 