// console.log("hello");

let hour = document.querySelector("#hour");
let mintues = document.querySelector("#mintues");
let second = document.querySelector("#second");
let mili = document.querySelector("#mili");

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
// console.log(start)

let timeInterval;
let milisecond =0;
let secondTime =0;
let minutesTime =0;
let hourTime =0;

start.addEventListener("click",()=>{
   timeInterval = setInterval(
        ()=>{
          if(milisecond==59)
          {
              milisecond=0;
          }
          if(secondTime==59)
          {
              secondTime=0;
          }
          if(minutesTime==59)
          {
              minutesTime=0;
          }
          if(hourTime==59)
          {
              hour=0;
          }
          mili.innerHTML =milisecond++;
          if(milisecond>=59)
          {
            second.innerHTML =secondTime++;
          }  
          if(secondTime>=59)
          {
            mintues.innerHTML=minutesTime++;
          }
          if(minutesTime>=59)
          {
            hour.innerHTML=hourTime++;
          }
        }
        ,100);
});


stop.addEventListener("click",()=>{
   clearInterval(timeInterval);
 });


reset.addEventListener("click",()=>{
    mili.innerHTML =0;
    hour.innerHTML=0; 
    second.innerHTML=0; 
  });

