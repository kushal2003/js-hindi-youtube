function sayMyName(){
    console.log("Hello")
}


sayMyName()

//execution 
sayMyName()


function addTwoNumbers(number1 , number2){
    console.log(number1+number2);
}
// addTwoNumbers(3,7)


function loginUserMessage(username){
    if (username === undefined)//or if(!username)
    {
        console.log('please enter the username')
        return ;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Kushal"))

function calculateCartPrice(num1){
    return num1;
}
//REST FUNCTION    ... WALA 

function calculateCartPrice(val1,val2,...num1)
{
    return num1;
}
let result =calculateCartPrice(100,200,300,499);
// console.log(result);


function handleObject(anyObject)
{
    console.log(`username is ${anyObject} and the price is ${anyObject.price}`)
}
