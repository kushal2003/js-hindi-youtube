const coding =["a","b","c","d","e"];
//FOR EACH 
// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })
/*
function PrintMe(item)
{
    console.log(item)
}
coding.forEach(PrintMe);


*/


//arrow functions sirf item nahi laata hai , woh item , index aurr array bhi laata hai 


// coding.forEach((item , index, array) => {
//     console.log(item);
//     console.log(index);
//     console.log(array);
// })


const myCoding=[
    {
        langName:"javascript",
        langFileName:"js"
    },
    {
        langName:"java",
        langFileName:"java"
    },
    {
        langName:"python",
        langFileName:"py"
    }
]

myCoding.forEach((item)=>{
    //abhi har ek item ek object hai 
    console.log(item.langName);
})

