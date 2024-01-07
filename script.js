const questions=[
          {
                    question:"Which is largest animal in the world?",
                    answers:[
                              {text:"shark",correct:false},
                              {text:"Blue Whale",correct:true},
                              {text:"Elephant",correct:false},
                              {text:"Giraffe",correct:false},
                    ]
          },
          {
                    question:"who is the current prime minister of india ?",
                    answers:[
                              {text:"Modi",correct:true},
                              {text:"Pappu",correct:false},
                              {text:"vajpayee",correct:false},
                              {text:"lalu",correct:false},
                    ]
          },
          {
                    question:"Who is Known as caption cool in cricket histroy?",
                    answers:[
                              {text:"virat",correct:false},
                              {text:"smith",correct:false},
                              {text:"dravid",correct:false},
                              {text:"Dhoni",correct:true},
                    ]
          },
          {
                    question:"Which is National bird of india?",
                    answers:[
                              {text:"shark",correct:false},
                              {text:"Hen",correct:false},
                              {text:"peacock",correct:true},
                              {text:"Giraffe",correct:false},
                    ]
          }
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
 
let currentQuestionIndex=0;
let score=0;
//start quiz
function startQuiz(){
          currentQuestionIndex=0;
          score=0;
          nextButton.innerHTML="Next";
          showQuestion();
}
//display the questions
 function showQuestion(){
          resetState();
          let currentQuestion=questions[currentQuestionIndex];
          let questionNo=currentQuestionIndex+1;
          questionElement.innerHTML=questionNo+ " . "+currentQuestion.
          question;
         
          //for display the answer
          currentQuestion.answers.forEach(answer =>{
                    const button=document.createElement("button");
                    button.innerHTML=answer.text;
                    button.classList.add("btn");
                    answerButtons.appendChild(button);
                    if(answer.correct){
                              button.dataset.correct=answer.correct;
                    }
                    button.addEventListener("click",selectAnswer);
          });

 }
  //hidee the question

 function resetState(){
          nextButton.style.display="none";
          while(answerButtons.firstChild){
                  answerButtons.removeChild(answerButtons.firstChild);  
          }
 }
 function selectAnswer(e){
          const selectedBtn=e.target;
          const isCorrect=selectedBtn.dataset.correct==="true";
          if(isCorrect){
                    selectedBtn.classList.add("correct");
                    score++;
          }
          else{
                    selectedBtn.classList.add("incorrect");
          }
          Array.from(answerButtons.children).forEach(button =>{
                    if(button.dataset.correct==="true"){
                              button.classList.add("correct");
                    }
                    button.disabled=true;
          });
          nextButton.style.display="block";
 }
 //show score

 function showScore(){
        resetState();
        questionElement.innerHTML=`you score ${score} out of ${questions.length}!`;
        nextButton.innerHTML="Play Again";
        nextButton.style.display="block";
 }
 function handleNextButton(){
        currentQuestionIndex++;
         if(currentQuestionIndex<questions.length){
                showQuestion();
         }
         else{
                showScore();
         }
}
nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex<questions.length){
                handleNextButton();
        }
        else{
                startQuiz();
        }
});
startQuiz();

