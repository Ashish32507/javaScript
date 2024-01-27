const colorElement = document.querySelectorAll('.container');
const body = document.querySelector('body');
console.log(colorElement);
colorElement.forEach(function(colorElement){
    console.log(colorElement);
    colorElement.addEventListener("click" ,function(e){
        console.log(e.target.id);
        if(e.target.id==='red')
        {
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id==='white')
        {
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id==='green')
        {
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id==='yellow')
        {
            body.style.backgroundColor= e.target.id;
        }
    });
});
