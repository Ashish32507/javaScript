// console.log("hello");
let body = document.querySelector("body");
let btn = document.querySelectorAll(".btn");


btn.forEach((value)=>{
    value.addEventListener("click",(e)=>{
        body.style.backgroundColor = e.target.id;
    })
})