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
// console.log(typeof heros)
// console.log(typeof id)


//MEMORIES

// Types : Stack(Primitive) , Heap (Non - Primitve)
// Stack-we  get a copy , Heap- reference milta hai toh changes original wale mei bhi reflect hote hai 

let a="kushal mittal"
let b=a; // yaha b ko ek copy mili hai original nhi mila , toh orignal mei changes show nhi honge when they are done in b
b="sigma"
console.log(a)
console.log(b)


// heap 
let myObject=
{
    name:"abc",
    age:69
}
let obj2=myObject;
obj2.name="pqr";
console.log(myObject)
console.log(obj2)


