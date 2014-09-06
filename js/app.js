var score = 0;
var lives = 3;

//the prompt objects, these will be used to determine what the user will be asked
var grnUp = {correct:"up", icon: "/img/1.png"};
var grnRgt = {correct:"right", icon: "/img/2.png"};
var grnDwn = {correct: "down", icon: "/img/3.png"};
var grnLft = {correct: "left", icon: "/img/4.png"};
var grnClck = {correct: "click", icon: "img/5.png"};
var redUp = {correct: "down", icon: "img/6.png"};
var redRgt = {correct: "left", icon: "img/7.png"};
var redDwn = {correct: "left", icon: "img/8.png"};
var redLft = {correct: "right", icon: "img/9.png"};
var redClck = {correct: "none", icon: "img/10.png"};

var startTime;
var currentTime;
var question;
var pastQuestion;
var playing = true;

// array that contains all the possible prompts
var prompts = {grnUp, grnRgt, grnDwn, grnLft, grnClck, redUp, redRgt, redDwn, redLft, redClck};

// code that displays the image goes her

// the prompt that will be displayed is randomly selected
question =  prompts[Math.floor((Math.random) * prompts.length)];

var response = //player input goes here

if(response === question.correct){
    score = score+1;
    question =  prompts[Math.floor((Math.random) * prompts.length)];
}
else{
    lives = lives - 1;
    if(lives === 0){
        // function to end game
    }
    question =  prompts[Math.floor((Math.random) * prompts.length)];
}
