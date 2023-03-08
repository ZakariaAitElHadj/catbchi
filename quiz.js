var questionBank= [
    {
        question : 'What Is a Cat’s Most Powerful Sense? ',
        option : ['Smell','Sight','Hearing','taste'],
        answer : 'Smell'
    },
    {
        question : 'The Average Lifespan Of Cats Is Around? ',
        option : ['4 to 7 years','8 to 11 years','12 to 18 years','all false'],
        answer : '12 to 18 years'
    },
    {
        question : 'The World Smallest Cat Breed Is ? ',
        option : ['The Singapura','Abyssinian','Bengal','Burmese'],
        answer : 'The Singapura'
    },
    {
        question : 'The Largest Cat Breed Is ?',
        option : ['chartreux','Bombay','Maine coon','Singapura'],
        answer : 'Maine coon'
    },
    {
        question : 'Wich Food Is Toxic For Cats ',
        option : ['Fish','Chocolate','cooked egg','pizza'],
        answer : 'Chocolate'
    },
    {
        question : 'Do Cats Dream? ',
        option : ['Yes','No','',''],
        answer : 'Yes'
    },
    {
        question : 'How Long Can A Singapura cat Live? ',
        option : ['Up To 8 Years ','Up To 10 Years',' Up To 15 Years','Up To 20 years'],
        answer : 'Up To 15 years'
    },
    {
        question : 'The Size Of The Smallest Cat Is? ',
        option : ['3 Inches','4 to 5 Inches','6 to 8 Inches','9 to 12 Inches'],
        answer : '9 to 12 Inches'
    },
    {
        question : 'how fast do cats run? ',
        option : ['up to 30 mph','up to 25 mph','up to 22 mph','up to 18 mph'],
        answer : 'up to 30 mph'
    },
    {
        question : 'How Many Teeths Does Normal Adults Cat have? ',
        option : ['18','22','30','36'],
        answer : '30'
    },
    {
        question : 'Through What Part Of The Body Do Cats Sweat? ',
        option : ['Backside','Ears','Paws','Armpits'],
        answer : 'Paws'
    },
    {
        question : 'How Old Was The Verified Worlds Oldest Cat? ',
        option : ['29','38','32','23'],
        answer : '38'
    },
    {
        question : 'How long Is Cats Pregnancy? ',
        option : ['5 months','9 months','3 months','6 months'],
        answer : '3 months'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();