const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

const reset = ()=>{
    optionfeild.forEach((input)=>{
        if(input.checked)
        {
            // // console.log(input.value)
            // return input.value;
            input.checked = false;
        }
    })
}

let index =0;
let total = quizData.length;
let right =0;
let wrong =0;
let questionfeild = document.querySelector("#quiz-question");
let optionfeild = document.querySelectorAll(".option")
// console.log(optionfeild)
let btn = document.querySelector("#btn");

const loadQuestion = ()=>{
    const data = quizData[index];
    if(index===total)
    {
       return end();
    }
    reset();
    questionfeild.innerHTML = `${index+1 +")"} ${data.question}`;
    optionfeild[0].nextElementSibling.innerHTML = data.a;
    optionfeild[1].nextElementSibling.innerHTML = data.b;
    optionfeild[2].nextElementSibling.innerHTML = data.c;
    optionfeild[3].nextElementSibling.innerHTML = data.d;
    
    console.log(data);
}

loadQuestion()

btn.addEventListener("click",()=>{
    let ans = getAnswer();
    const data = quizData[index];
    if(ans===data.correct)
    {
        right = right+1;
    }
    else
    {
        wrong = wrong+1;
    }
    index++;
    loadQuestion()
    
})


const getAnswer = ()=>{
    let answerq;
    optionfeild.forEach((input)=>{
        if(input.checked)
        {
            // console.log(input.value)
            answerq= input.value;
            // break;
        }
    })
    return answerq;
}

// const reset = ()=>{
//     optionfeild.forEach((input)=>{
//         if(input.checked)
//         {
//             // // console.log(input.value)
//             // return input.value;
//             input.checked = false;
//         }
//     })
// }


const end=()=>{
    let endSc = document.querySelector(".quiz-details").innerHTML = `
    <div class="col">
      <h3> Hii, you've scored ${right} / ${total} </h3>
    </div>
    `;
}

