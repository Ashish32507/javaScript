let btn = document.querySelector("#img");
let icon = document.querySelector("#icon");

btn.addEventListener("click",(e)=>{
    icon.style.transform = 'translate(-50%,-50%) scale(1)';
    icon.style.opacity=0.5;

    setTimeout((e)=>{
        icon.style.transform = 'translate(-50%,-50%) scale(0)';
        
    },1000);
  
});