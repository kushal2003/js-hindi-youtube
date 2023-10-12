// for of loop 
// for of direct array mei se value uthata hai 
const myArr=[1,2,3,4,5]


for (const i of myArr) {
    // console.log(i);
}

const greetings= "hello World!"
for (const greet of greetings)
{
    // console.log(`each char is ${greet}`)
}



//**************************************** MAPS ***************************** */

//MAPS - object hai ,hold key value pair 
// MAPS HAI 
const map=new Map()
map.set('in',"india")
map.set('usa',"america")
// console.log(map)

//FOR OF ON MAPS

for(const [key,value] of map)// this is destructure of array
{
    // console.log(key,':',value);
}


//FOR OF ON OBJECTS

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman',
    'rb':"ruby"
}

// for(const [key,value] of myObj)
// {
//     console.log(key,value)//yeh glt tareeka hai objects access krne ka
// }


//for object we use for in object 

for (const key in myObj)
{
    // console.log(key,' : ',myObj[key]);
}

const programming =["js","rb","py","java","cpp"]
//for in direct key uthaata hai , (array ke case meio index)
for ( const key in programming)
{
    // console.log(key);
}

const map2= new Map();
map2.set ('a',"apple");
map2.set('b',"ball");
map2.set('c',"cat");

// for (const [key,value] in map2)
// {
//     console.log(key,value);
// }

// since the maps are not iterable , therefor it iswrong to write them qith for in loop 

