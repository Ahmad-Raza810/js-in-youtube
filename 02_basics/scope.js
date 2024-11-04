/* 1.Global Scope

2.function Scope

3.Local Scope

4.Lexical Scope */





//var have functional scope

/* 
 function checkScope()
{
    var check2=20
}

checkScope()
console.log("out:",check2) */


var check=10
let check2=100

if (true) {
    let check2=50
    console.log(check2);
    check2=110
    console.log(check2);

}
console.log(check2);



function outerBlock(){
    console.log("outer block")
    let a="ahmad"

         function innerBlock(){
             console.log("inner block")
             console.log(a);
             var b="raza"
        }
        innerBlock()


    //console.log(b);//this cause an error due to functional scope
    
}
outerBlock()

//++++++++++++++++++++++++++++++++++++++++  Hoisting  ++++++++++++++++++++++++++++++++++


console.log(addOne());
//console.log(addTwo());


function addOne(value=10) {
    return value+1
}


var addTwo=function(value=20) {
    return value+2
}

const greet = () => "Hello!"

//console.log(greet())




