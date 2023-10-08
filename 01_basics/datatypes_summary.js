//primitve

//7 types : number , boolean , string , null, undefined, Symbol, BigInt

//Reference (Non Primitve)

//array , objects, functions

// symbol
const id=Symbol('123')
const AnotherId=Symbol('123')

//symbol ka kaam hee yeh hai , chahe value same hai lekin dono ki value alag hogi 
console.log(id===AnotherId);

//array
const heros=["shaktiman", "naagraj","bunty"]

let myObj={
    name: "kushal",
    age:22
}
const myFunction= function(){
    console.log("Hello World")
}
console.log(typeof heros)
console.log(typeof id)