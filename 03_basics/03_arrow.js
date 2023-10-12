const user={
    username:"kushal",
    price:999,
    welcomeMessage:function()//this is declaration of method
    {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// console.log(this)

function chai(){
    let username="kushal"
    console.log(this);
}
// chai()

//Arrow function 
// Format : iske aage var name daal sakte hai isse hum (parameter aa sakte hai ) => {}

// iske aate hee function keyword hat gyaa 

const addTwo = (num1,num2) => {
    return num1+num2;
}

console.log(addTwo(3,4))


// now make an implicit functions: that is return in the same line ,"return " aur " { }" dono hat jayenge
const addThree=(num1,num2,num3) => num1 +num2 + num3

// console.log(addThree(1,2,3))

const myArray=[2,5,4,7,8]
//foreach method in array 

