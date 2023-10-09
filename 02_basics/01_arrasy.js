// array 

const myArr=[1,2,3,4,5,6,true, "hitest"];
//array can be of different types
//these arrays are size flexible

// console.log(myArr)
// console.log(myArr[0])
//the arrays operations : follow shallow copy(the changes made in a copy are also reflected in
// in the original array )

const myHeroes=["shaktimaan","naagraj"]

const arr2=new Array(1,2,3,4,5)


//ARRAY METHODS

// arr2.push(6);
// arr2.pop()

// arr2.unshift(69)
// arr2.shift() 
// console.log(arr2)

// console.log(arr2.includes(3))
// console.log(arr2.indexOf(8))
const newarr=arr2.join(' ')
// console.log(newarr)
// iss newarr ka type is string


// *****************************  SLICE  VS SPLICE **************************//
console.log("A",arr2)
const myn1= arr2.slice(1,3)

console.log(myn1);
console.log("B",arr2);

const myn2=arr2.splice(1,3)
console.log("C",arr2);
console.log(myn2)


