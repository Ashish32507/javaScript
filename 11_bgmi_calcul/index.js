let height = document.querySelector("#heigth");
let weight = document.querySelector("#weight");
let btn = document.querySelector("#btn");
btn.addEventListener("click",()=>{
    // let result = 703*(weight /Math.pow(height,2));
    // console.log(height.value);
    // console.log(weight.value)
    // console.log(result);
    if(!height.value)
    {
        alert("Enter The Heigth");
        return;
    }
    if(!weight.value )
    {
        alert("Enter The Weigth");
        return;
    }
    if(height.value && weight.value)
    {
        let result = ((weight.value /(height.value*height.value))*10000).toFixed(2);
        // alert(result)
        if(result<=18.6)
        {
            alert(`You Are Under Weight : ${result}`);
        }
        else if(result>18.6 && result<=24.9)
        {
            alert(`You Are Normal Weight : ${result}`);
        }
        else{
            alert(`You Are Over Weight : ${result}`)
        }
        height.value="";
        weight.value="";
    }
});