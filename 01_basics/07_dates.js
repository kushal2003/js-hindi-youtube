//DATES

let myDate= new Date();// Date is an object in java script
// console.log(myDate);
// console.log(typeof myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())


// to declare a date
let mydate=new Date(2023, 0 , 25) // yaha month start from 0
// console.log(mydate.toDateString())

let mydate2= new Date(2003, 9,6 , 5,4);
// console.log(mydate.toLocaleString())

let mydate3= new Date("2023-01-07") // yaha month start from 1 
// console.log(mydate3.toDateString())

// *************************   TIME STAMP.   ********************************//
//is it used to design polls aur pta krna hai kisne sabse pehle sahi ans diya

let myTimeStamp=Date.now();
// console.log(myTimeStamp)
// console.log(mydate.getTime()) // now we can compare the time 

// now convert to seconds
// console.log(Date.now())

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
console.log(newDate.toLocaleString())

// now we can customize the format of the locale string

newDate.toLocaleString(
    'default'
,{
weekday:"long"
})