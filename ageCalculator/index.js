let selectDate = document.querySelector("#selectdate");
let age = document.querySelector("#exact-date");
let btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
    let now = new Date();
    let olddate = new Date(selectDate.value);
    let difference = now-olddate;
    let year = Math.floor(difference/(1000*60*60*24));
    let month = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let day = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    age.style.display ="block";
    age.innerHTML = `${Math.floor(year/365)} Year, ${Math.floor(month/12)} Month, ${Math.floor(day/30)} Days`;
})