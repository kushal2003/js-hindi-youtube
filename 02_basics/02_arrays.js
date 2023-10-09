const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes);//doesn't return anything
//this pushes array as an element
// console.log(marvel_heroes)

//better method : CONCAT
//returns new array
// console.log(marvel_heroes.concat(dc_heroes));


//SPREAD

const all_new_heroes=[...dc_heroes,...marvel_heroes];
//isne elements ko spread krra aur firr attach kr diya 
console.log(all_new_heroes)

console.log(Array.from({name:"abc"}))//interesting case

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))



