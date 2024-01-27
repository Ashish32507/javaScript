let main = document.querySelector("body")
let cursor = document.querySelector("#cursor");
main.addEventListener("mousemove",function(e)
{
    cursor.style.left = e.x+"px";
    cursor.style.top = e.y+"px";
    // console.log(e);
});