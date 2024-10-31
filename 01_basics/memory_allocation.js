//for primitive values there is stack memory allocation
//there is a copy of original value
let id=20
let anotherId=id
anotherId=30

console.log(id,"\n",anotherId);


//for non primitive data types there is heap space
//there is no copy only original value
let stu1={
name:"ahmad",
id:123
}

console.log(stu1);
let stu2=stu1
stu1.name="raza"
console.log(stu1,stu2);
