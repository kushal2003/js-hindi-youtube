//singleton
//jab bhi constructor se banega , toh singleton hee banega. 

//object.create=> this is constructor method

//object
const mySym=Symbol("key1")

const JsUser ={
    name :"Kushal",
    age:20,
    [mySym]: "mykey1",
    loc:"jaipur",
    email:"abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]
}

//"." ka use krke tabhi access kr payenge jab inverted commas na ho uss key pe
// console.log(JsUser)
// console.log(JsUser["name"])
// console.log(JsUser.name)
// console.log(JsUser.age)

// Object.freeze(JsUser); // iske baad koi bhi changes nhi hone wale objectmei 

//now we are defining a method
JsUser.greeting = function(){
    console.log("Hello ")
}

JsUser.greetingTwo = function()
{
    console.log(`Hello , ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

console.log(JsUser[mySym]) // this is the only way to access the symbol in the object 

