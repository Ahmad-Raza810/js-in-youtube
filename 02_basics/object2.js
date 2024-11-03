let employee={
name:"raza",
id:123,
isworking:true,
}


employee.greeting=function () {
    console.log("Asslawalikum ji")
    
}

employee.greetingTwo=function () {
    console.log(`hello ${this.name} ji`)
    
}

console.log(employee);

/* employee.greeting()
employee.greetingTwo() */


//merge two or more object 
//1.throgh Object.assign(target,source)
//2.spread operators

obj1={a:1,b:2},
obj2={c:1,d:4}
console.log(Object.assign({},obj1,obj2));


obj3={...obj1,...obj2}
console.log(obj3);

//keys,values,entries

console.log(Object.keys(employee))
console.log(Object.values(employee))
console.log(Object.entries(employee))