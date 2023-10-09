//Numbers
const score=400
//yaha js ne khud decide krra hai type kya hai

console.log(score)
const balance= new Number(1000)
console.log(typeof balance)


console.log(balance.toString().length)

const otherNumber=69.6889
console.log(otherNumber.toPrecision(4));

const hundreds= 10000000
console.log(hundreds.toLocaleString('en-IN'))



// MATH LIBRARY 
console.log(Math.abs(-69))
console.log(Math.floor(Math.random()*10)+1)

const min=10;
const max=20;
//TO GENERATE RANDOM NO. BETWEEN MIN AND MAX 
console.log(Math.floor(Math.random()*(max-min+1))+ min) 