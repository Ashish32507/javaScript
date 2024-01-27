let hour = document.querySelector("#hour");
let mitues = document.querySelector("#minute");
let second = document.querySelector("#second");
let duration = document.querySelector("#duration")


function timers(){
    let date = new Date();
   let hou =  date.getHours();
    hour.innerHTML = hou;
    mitues.innerHTML = date.getMinutes();
    second.innerHTML =  date.getSeconds();
    if(hou>=12)
    {
        duration.innerHTML = "PM";
    }
    else{
        duration.innerHTML = "AM";
    }

}


setInterval('timers()',1000);
