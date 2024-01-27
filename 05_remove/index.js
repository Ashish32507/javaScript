let text = document.querySelector("#h5");
let btn = document.querySelector("#btn");
let clicks = 0;
btn.addEventListener("click",(e)=>
{
    if(clicks===0)
    {
        text.innerHTML = "Friend";
        btn.innerHTML ="Remove Friend"
        clicks=1;
    }
    else{
        text.innerHTML = "Stanger";
        clicks=0;
        btn.innerHTML ="Add Friend"
    }
    
});