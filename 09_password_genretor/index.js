const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("#data-lengthNumber");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const dataCopy = document.querySelector("[data-copy]");
const dataCopyMsg = document.querySelector("[data-copyMsg]");
const upperCase = document.querySelector("#uppercase");
const lowerCase = document.querySelector("#lowercase");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");
const dataIndicator = document.querySelector("[data-indicator]");
const genBtn = document.querySelector("#btn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

const symbols ='~"`!@#$%^&*?/><,.]{}|[';




let password ="";
let passwordLength = 10;
let checkcount = 0;


handleSlider();
//set password length
function handleSlider()
{
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

// set indicator color
function setIndicatorColor(color)
{
    dataIndicator.style.backgroundColor = color;
}

function getRandomInteger(min,max)
{
   return Math.floor(Math.random()*(max-min)) +min;
}

function genrateRandomNumber(){
    return getRandomInteger(0,9)
}

function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}

function generateSymbol(){
    const rndNumber = getRandomInteger(0,symbols.length)
    return symbols.charAt(rndNumber);
}

function passStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if(upperCase.checked) hasUpper = true;
    if(lowerCase.checked) hasLower = true;
    if(number.checked) hasNum = true;
    if(symbol.checked) hasSym = true;
    if(hasUpper && hasLower &&(hasNum || hasSym) && passwordLength>=8)
    {
        setIndicatorColor("#0f0");
    }
    else if((hasNum || hasSym) && (hasLower || hasUpper) && passwordLength>=6)
    {
        setIndicatorColor("#");
    }
    else{
        setIndicatorColor("red");
    }
}


function shufflePassword(array){
    for(let i =array.length-1;i>0;i--)
    {
        const j= Math.floor(Math.random()*(i+1));
        const temp = array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    let str = "";
    // array.forEach((el)=>(str+=el));
    for(let j=0;j<array.length;j++)
    {
        str+=array[j];
    }
    return str;
}



// copy content

async function copyContent(){
    try
    {
        await navigator.clipboard.writeText(passwordDisplay.value);
        dataCopyMsg.innerText = "Copied";
    }
    catch(e)
    {
        dataCopyMsg.innerText = "Failed";
    }
    dataCopyMsg.classList.add("active");
    dataCopyMsg.style.color ='white';
    setTimeout(()=>{

        // dataCopyMsg.classList.remove("active");
        dataCopyMsg.style.display = 'none';
        // console.log("hello");
    },2000)

}



inputSlider.addEventListener('input',(e)=>{
    passwordLength = e.target.value;
    handleSlider();
});


dataCopy.addEventListener('click',(e)=>{
   if(passwordDisplay.value)
   {
    copyContent();
   }
});

function handleCheckBoxChange(){
    checkcount = 0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
        {
            checkcount++;
        }
    });
    if(passwordLength<checkcount){
        passwordLength = checkcount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange)
})


genBtn.addEventListener('click',(e)=>{
    if(checkcount<=0)
    {
        return ;
    }
    if(passwordLength<checkcount){
        passwordLength=checkcount;
        handleSlider();
    }
    password="";
    // if(upperCase.checked){
    //     password +=generateUpperCase();
    // }
    // if(lowerCase.checked){
    //     password +=generateLowerCase();
    // }
    // if(number.checked){
    //     password +=genrateRandomNumber();
    // }
    // if(lowerCase.checked){
    //     password +=generateSymbol();
    // }
    let funAchr = [];
    if(upperCase.checked){
        funAchr.push(generateUpperCase);
    }
    if(lowerCase.checked){
        funAchr.push(generateLowerCase)
    }
    if(number.checked){
        funAchr.push(genrateRandomNumber);
    }
    if(symbol.checked){
        funAchr.push(generateSymbol);
    }

    for(let i=0;i<funAchr.length;i++)
    {
        password+=funAchr[i]();
    }

    for(let i=0;i<passwordLength-funAchr.length;i++)
    {
        let randIndex = getRandomInteger(0,funAchr.length)
        password+=funAchr[randIndex]();
    }
    // console.log(password)
    password = shufflePassword(password);
    passwordDisplay.value = password;
    passStrength();
});