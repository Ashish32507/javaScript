let Story = document.querySelectorAll(".story");
let liveStory = document.querySelector(".live-story");
Story.forEach((value)=>{
    value.addEventListener("click",function(){
        liveStory.style.display = 'block';
        setTimeout(()=>{
            liveStory.style.display = 'none';
        },3000)
    })
})