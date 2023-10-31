const randomNumber = parseInt(Math.random()*100 +1);

const submit = document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');

const lowOrHi=document.querySelector('.lowOrHi');
const startOver =document.querySelector('.resultParas');

const p =document.createElement('p');
let prevGuess=[];
let numGuess=1;
let playgame=true;
if (playgame)
{
    submit.addEventListener('click',function(e)
    {
        e.preventDefault(); //this was to prevent the values from getting submitted
        const guess=parseInt(userInput.value);
        validateGuess(guess)
    })
}
function validateGuess(guess)
{
    //validate kregaa if the valuee is between 1 and 100 or not 
    let value =parseInt(guess);
    if(isNaN(guess))
    {
        alert('Please enter a valid Number');
        
    }
    else if (guess<1)
    {
        alert('Please enter a number greater than 0');
    }
    else if(guess>100)
    {
        alert('Please enter a number less than or equal to 100 ');
    }
    else
    {
        prevGuess.push(guess);
        if(numGuess === 11)
        {
            displayGuess(guess);
            displayMessage(`Game Over, Random Number was: ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess)
{
    //high 
    //low 
    // aur equal wale messsage yaha se print krvayenge
    const guess=parseInt(userInput.value);
    if(guess>randomNumber)
    {
        displayMessage(`The number you entered was higher`);
    }
    else 
    {
        displayMessage(`The number you enter was lower`);
    }


}

function displayMessage(message)
{
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function displayGuess(guess)
{
    // this cleans the previous values
    // guess remaining ko update krega
    //arrays ko update krega , jo already guess kr chuke ho unhe 
    userInput.value='';
    guessSlot.innerHTML += `${guess}`;
    numGuess++;
    remaining.innerHTML=`10-${numGuess}`;

}

function endGame ()
{
    
}
function newGame()
{

}
 




