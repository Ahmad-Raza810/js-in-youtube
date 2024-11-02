let hero=['iron-man','Thor','Hulk']
console.log(typeof hero);


hero.push("SHAKTIMAN")

hero.unshift("captain america")
console.log(hero);

//pop=>deleting element from last
//shift=>deleting element from begim

//push=>adding new element from last
//unshift=>adding new element from begin


let numbers=new Array(1,2,3,4,5)

if(numbers.includes(5))
{
console.log("Yes..............");

}
else
console.log("NO...............");


joined_numbers=numbers.join()
console.log(joined_numbers);


//slice and spice
//slice do not change in original array but splice don this.

console.log(numbers.slice(1,3),numbers)

console.log(numbers.splice(1,3),numbers);

console.log(numbers)


//concatenation

/* 1.push()
2.concat()
3.spread operators */


let maravel=['iron-man','Thor','Hulk']
let dc=["batman","superhero",'flash']
//maravel.push(dc)
//console.log(maravel.concat(dc))

avengers=[...maravel,...dc]
console.log(avengers);

let myArray=[1,2,3,[4,5],6,[7,8,[9,10]]]
console.log(myArray.flat(Infinity))

console.log(Array.isArray([]))


console.log(Array.from(12324))
