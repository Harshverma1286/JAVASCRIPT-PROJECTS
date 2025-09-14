document.addEventListener("DOMContentLoaded", () => {
    const notescontainer = document.querySelector(".saved_notes");
    const createbtn = document.querySelector("#btn");
    let notes = document.querySelectorAll(".input_box");

    function shownotes(){
        notescontainer.innerHTML = localStorage.getItem("notes");
    }
    shownotes();

    function updatestorage() {
        localStorage.setItem("notes", notescontainer.innerHTML);
    }


    createbtn.addEventListener("click", () => {
        let inputbox = document.createElement("p");
        let img = document.createElement("img");

        inputbox.className = "input_box";
        img.className = "delete_icon";
        inputbox.setAttribute("contenteditable", "true");

        img.src = "https://tse1.mm.bing.net/th?id=OIP.NlbUj2czKI4hBDjpU4jN3gHaII&pid=Api&P=0&h=220";

        notescontainer.appendChild(inputbox).appendChild(img);
    });


    notescontainer.addEventListener("click",function(e){
        if(e.target.tagName==="IMG"){
            e.target.parentElement.remove();
            updatestorage();
        }
        else if(e.target.tagName==="P"){
            notes = document.querySelectorAll(".input_box");
            notes.forEach(nt => {
                nt.onkeyup = function(){
                    updatestorage();
                }
            });
        }
    })


    document.addEventListener("keydown",event=>{
        if(event.key==="Enter"){
            document.execCommand("insertLineBreak");
            event.preventDefault();
        }
    })


});


