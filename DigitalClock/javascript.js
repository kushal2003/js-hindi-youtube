
const var1 = document.querySelector('#clock');

//to update the time every second
setInterval(function(e){
    const date = new Date();
    const time1=date.toLocaleTimeString();
    // var1.appendChild(document.createTextNode(time1));
    var1.innerHTML=time1;
},1000)
