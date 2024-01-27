let btn = document.querySelector("#switch");
let output = document.querySelector("#output");
let powerOn =1;
btn.addEventListener("click",()=>{
    let newElement = document.createElement("img");
    if(powerOn)
    {
        newElement.src = 'ONbulb.png';
        output.innerHTML = '';
        output.appendChild(newElement);
        btn.innerHTML = 'Power Off';
        btn.style.backgroundColor = 'rgb(39, 202, 39)';
        powerOn=0;
    }
    else
    {
        // let newElement = document.createElement("img");
        newElement.src = 'OFFbulb.png';
        output.innerHTML = '';
        output.appendChild(newElement);
        btn.innerHTML = 'Power On';
        powerOn=1;
        btn.style.backgroundColor = 'red';
    }

});