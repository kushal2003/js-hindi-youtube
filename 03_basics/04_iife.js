//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

//NAMED IIFE
(function chai()
{
    console.log(`DB CONNECTED`)
})();


(function addno(num1,num2)
{
    console.log(num1+num2);
})(1,2);


//UNNAMED IIFE

((name)=>{
    console.log(`hello ${name}`)
})("Kushal");
