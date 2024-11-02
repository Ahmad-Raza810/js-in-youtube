//singleton object =>Object.create()

//literal object

let mysym=Symbol("sym1")
let user={
    "name":"ahmad",
    id:123,
    isLoggedin:true,
    [mysym]:"key1"
}

console.log(user["name"]);
console.log( typeof user[mysym]);

Object.freeze(user)