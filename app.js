var quizQuestions = [
    {
        id: 1,
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "Hyper Text Programming Language",
            "Hyper Text Styling Language",
            "Hyper Text Scripting Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        id: 2,
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "a",
            "link",
            "href",
            "hyperlink"
        ],
        answer: "a"
    },
     {
         id: 3,
         question: "Which CSS property is used to change the text color?",
         options: [
             "font-color",
            "text-color",
             "color",
             "background-color"
         ],
         answer: "color"
     },
     {
         id: 4,
         question: "Which CSS property controls the size of text?",
         options: [
             "text-style",
             "font-size",
             "text-size",
             "font-style"
         ],
         answer: "font-size"
     },
     {
         id: 5,
         question: "Inside which HTML element do we put JavaScript?",
         options: [
             "javascript",
             "js",
             "script",
             "code"
         ],
         answer: "script"
     },
     {
         id: 6,
         question: "Which symbol is used for single-line comments in JavaScript?",
         options: [
             "//",
             "/* */",
             "#",
         ],
         answer: "//"
     },
     {
         id: 7,
         question: "Which JavaScript keyword is used to declare a variable?",
         options: [
             "var",
             "int",
             "string",
             "declare"
         ],
         answer: "var"
     },
     {
         id: 8,
         question: "Which CSS property is used to make a website responsive?",
         options: [
             "flex",
             "media-query",
             "@media",
             "responsive"
         ],
         answer: "@media"
     },
     {
         id: 9,
         question: "Which method is used to select an element by its ID in JavaScript?",
         options: [
             "getElementByClass()",
             "getElementById()",
             "querySelectorAll()",
             "selectById()"
         ],
         answer: "getElementById()"
     },
     {
         id: 10,
         question: "Which HTML attribute is used to define inline styles?",
         options: [
             "class",
             "styles",
             "style",
             "font"
         ],
         answer: "style"
     }
];

var questions = document.getElementById("question")
var options = document.getElementById("option")
var counter = 0
var serial =document.getElementById("serial")
var next = document.getElementById("next")
var score = 0

function questionElement(){
    var question = quizQuestions[counter].question
    questions.innerHTML = question 
    options.innerHTML =""

    var option = quizQuestions[counter].options
    for(var i =0;i<option.length;i++ ){
            var li = `<li onclick = "answerCheck(this)">${option[i]}</li>`
            options.innerHTML += li
    }
}
questionElement()

function nextQuestion (){
    counter++
    if (counter<quizQuestions.length){
        serial.innerHTML = `${counter+1}/${quizQuestions.length}`
        questionElement()
        
    }
    else{
        next.innerHTML =""
        next.style.border ="none"
        counter == quizQuestions.length ? serial.innerHTML ="" :null
    } 
    next.setAttribute("disabled",true) 


}
function answerCheck(li){
    var userAns = li.innerHTML
    var correctAns = quizQuestions[counter].answer
     var value = options.getElementsByTagName("li");

    if (userAns === correctAns){
        li.style.background = 'green'
        score++
    }
    else{
        li.style.background = 'red'
         for (var li of value){
            if (li.innerHTML === correctAns){
                li.style.background = 'green'
                break
            }
            
         }
    }
    for (var li of value){
            
                li.style.pointerEvents= 'none'
         }
        next.removeAttribute("disabled")
    
} 

