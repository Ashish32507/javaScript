var count = document.querySelector("#value");
function decrement()
{
    let value = parseInt(count.innerText);
    value = value-1;
    count.innerText = value;
}

function Increment()
{
    let value = parseInt(count.innerText);
    value = value+1;
    count.innerText = value;
}