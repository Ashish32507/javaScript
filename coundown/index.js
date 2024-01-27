let day = document.querySelector("#day");
let hour = document.querySelector("#hour");
let min = document.querySelector("#mins");
let sec = document.querySelector("#sec");
let selectDate = document.querySelector("#starting");
let startBtn = document.querySelector("#startTimer");




// console.log(selectDate.Date());
// console.log(hour+min+sec+day)
startBtn.addEventListener("click",()=>{
    // console.log(selectDate.value);
    setInterval(()=>{
        clock();
    },1000)
    // clock();
})



function clock(){
    let ending = new Date(selectDate.value);
    let now = new Date();
    // console.log(ending-now)
    let difference = ending-now;
    let days = Math.floor(difference/(1000*60*60*24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    // console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining.`);
    day.innerHTML =days;
    hour.innerHTML =hours;
    min.innerHTML=minutes;
    sec.innerHTML = seconds;
}