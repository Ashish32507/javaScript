let newNotes = document.querySelector("#note");
let addBtn = document.querySelector("#addNote");
let main = document.querySelector(".inner");
let notesData = document.querySelector("#note");
let updateBtn = document.querySelector("#update");
updateBtn.style.display="none";


let SaveData = [];

addBtn.addEventListener("click",()=>{
    let noteList = document.createElement("div");
    noteList.classList.add("list");
    noteList.innerHTML =
    `
      <input type="text" id="saveNotes" class="inputBox" readonly value="${notesData.value}">
      <button class="btn" id="editNote">Edit</button>
      <button class="btn" id="deleteNote">Delete</button>
    `;
    main.append(noteList);
    alert("Your Notes Is Add SuccessFully");
    newNotes.value = "";


    let deleBtn = noteList.querySelector("#deleteNote").addEventListener("click",()=>{
        noteList.remove();
    });
    let editBtn = noteList.querySelector("#editNote").addEventListener("click",()=>{
        notesData.value = noteList.querySelector("#saveNotes").value;
        updateBtn.style.display="block";
        updateBtn.addEventListener("click",()=>{
            noteList.querySelector("#saveNotes").value = notesData.value;
            newNotes.value = "";
            updateBtn.style.display="none";
        });
    });

    // deleBtn
});

