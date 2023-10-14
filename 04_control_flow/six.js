const coding=["js","ruby","python","java","cpp"]

const values=coding.forEach((item)=>{
    console.log(item);
    // return item
    //chahe kuch bhi ho jaaye , yehh for each kabhi value return nhi krega 

});
// console.log(values)

//*****************************FILTERS ************************ */

const myNums=[1,2,3,4,5,6,7,8,9]

//FILTER ALSO HAS A CALL BACK 

const newNums=myNums.filter((nums)=>{
    //explicit mei 'return' krna padta hai 
    return nums>4;
})
// here newNums is an array
console.log(newNums);

const newNums1=[];
myNums.forEach((num)=>{
    if (num>4)
    {
        newNums1.push(num);
    }
})
// console.log(newNums1);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  //we need books jinka genre is history 
  const userBooks =books.filter((bk)=>{ bk.genre ==='History'})
  console.log(userBooks);

  