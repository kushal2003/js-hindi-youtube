//how to check if an object is empty of not , kyuki {} toh true deta hai 

//APPROACH 
const myObj={}

if (Object.keys(myObj).length===0)
{
    console.log("empty hai object");
}


//NULLISH COALESCING OPERATOR (??) : NULL , UNDEFINED

let val1;
val1 =null ?? undefined?? 10;
console.log(val1);

//ternary operator ?:
//condition? true : false

(10>5) ? console.log("10 is greater than 5"): console.log("10 is less than 5");