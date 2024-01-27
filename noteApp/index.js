// console.log("hello")

let main = document.querySelector(".note");
let btn = document.querySelector("#btn");
let deletebtn = document.querySelector("#deletebtn");

// console.log(main)

const saveData = ()=>{
    const data = document.querySelectorAll("#textarea");
    console.log(data);
    const dataArray = [];
    
    data.forEach((e)=>{
        dataArray.push(e.value);
    })
    console.log(dataArray)
    localStorage.setItem("notes",JSON.stringify(dataArray));
}

btn.addEventListener("click",()=>
{
    addNotes();
});


function addNotes(text=""){
    let notes = document.createElement("div");
    notes.classList.add("notes-box");
    notes.innerHTML = `
       <div class="notes-header">
           <i class="save fa-solid fa-copy" style="color: #ffffff;"></i>
           <i class="trash fa-solid fa-trash" style="color: #ffffff;"></i>
       </div>
       <div class="notes-content">
           <textarea id="textarea">${text}</textarea>
       </div>
    `;
    main.appendChild(notes);
    notes.querySelector(".trash").addEventListener("click",()=>{
        notes.remove();
    })

    main.appendChild(notes);
    notes.querySelector(".save").addEventListener("click",()=>{
        saveData();
    })
    main.appendChild(notes);
    saveData();
}

(
    function(){
       const nnotes = JSON.parse(localStorage.getItem("notes")); 
       console.log(nnotes)
       nnotes.forEach((e)=>{
        addNotes(e)
       })
    }
)()

