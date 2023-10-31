const form=document.querySelector(".container .form-container form");
console.log(form)
form.addEventListener('submit',function(e){
    e.preventDefault();
    
    const height= parseInt(document.querySelector('.container .form-container #height').value)
    const weight=parseInt(document.querySelector('.container .form-container #weight').value)
    
    const result = document.querySelector('.container .form-container #results')
    if (height === '' || height<=0 || isNaN(height))
    {
        result.innerHTML='Enter a valid height!!'
    }
    else if (weight==='' || weight<=0 || isNaN(weight))
    {
        result.innerHTML="Enter a valid weight!!"
    }
    else
    {
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>the Bmi is : ${bmi}</span>`
    }
})