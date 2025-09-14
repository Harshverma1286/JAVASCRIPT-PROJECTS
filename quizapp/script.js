const questions = [
    {
        question: " which is largest animal in the world",
        answer:[
            { text:"shark",correct:false},
            {text:"blue whale", correct:true},
            {text:"elephant",correct:false},
            {text:"giraffe",correct:false},
        ]
    },
    {
        question: "which is the smallest continent in the world?",
        answer:[
            {text:"asia",correct:false},
            {text:"australia",correct:true},
            {text:"arctic",correct:false},
            {text:"africa",correct:false},
        ]
    },
    {
        question: "which is the largest desert in the world",
        answer:[
            {text:"kalahari",correct:false},
            {text:"gobi",correct:false},
            {text:"sahara",correct:true},
            {text:"antartica",correct:false}
        ]
    },
    {
        question: "which is the samllest country in the world?",
        answer:[
            {text:"vatican city",correct:true},
            {text:"bhutan",correct:false},
            {text:"nepal",correct:false},
            {text:"sri lanka",correct:false},
        ]
    },
];

const questionelement = document.querySelector(".questions");

const answerbutton = document.querySelector(".answer_buttons");

const nextbutton = document.getElementById("submit");

let currentquestionindex = 0;
let score = 0;

function startquiz(){
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "next";
    showquestion();
}

function showquestion(){
    resetstate();
    let currentquestion = questions[currentquestionindex];
    let questionno = currentquestionindex+1;
    questionelement.innerHTML = questionno+"."+currentquestion.question;

    currentquestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectanswer);


    });
}

function resetstate(){
    nextbutton.style.display = "none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }

}

function selectanswer(e){
    const selectbutton = e.target;
    const iscorrect = selectbutton.dataset.correct =="true";
    if(iscorrect){
        selectbutton.classList.add("correct");
        score++;
    }
    else{
        selectbutton.classList.add("incorrect");
    }

    Array.from(answerbutton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextbutton.style.display = "block";
}

function showscore(){
    resetstate();
    questionelement.innerHTML = `you scored ${score} out of ${questions.length}`;

    nextbutton.innerHTML = "play again";
    nextbutton.style.display = "block";
}

function handlenextbutton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        showquestion();
    }
    else{
        showscore();
    }
}



nextbutton.addEventListener("click",function(){
    if(currentquestionindex<questions.length){
        handlenextbutton();
    }
    else{
        startquiz();
    }
})

startquiz();





