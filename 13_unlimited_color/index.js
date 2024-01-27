let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let background = document.querySelector(".outer");

function randomColor(){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

// console.log(randomColor())
let intervalId;

start.addEventListener('click',()=>{
   intervalId = setInterval(()=>{
        background.style.backgroundColor = randomColor();
        // console.log("Start");
    },1000)
})

stop.addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId=null;
    // console.log("Stoped");
})

