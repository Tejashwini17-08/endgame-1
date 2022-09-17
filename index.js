var readlineSync = require("readline-sync");
var score =0;
var username = readlineSync.question("what is your name?");
console.log("welcome " + username + " to DO YOU KNOW TEJU?");
console.log("you can use only lowercase alphabets");
function play(question,answer){
  var useranswer = readlineSync.question(question);
  if(useranswer === answer){
    console.log("right");
    score = score+1;
  }
  else{
    console.log("wrong");
    score=score-1;
  }
  console.log("your current score: " + score);
}
var question1 ={
  ques: "what's my surname?",
  ans:"kotaputla",
}
var question2 = {
  ques:"what is my native?",
  ans:"armoor",
}
var question3 ={
  ques: "what is my stream?",
  ans:"ece",
}
var question4 ={
  ques:"where am i leaving currently?",
  ans:"hyderabad",
}
var question5 ={
  ques:"whats my fav chocolate?",
  ans:"oreo silk",
}
var questions = [question1,question2,question3,question4];
for(var i=0;i<questions.length;i++){
  play(questions[i].ques,questions[i].ans);
}
console.log("yay! you have scored: " + score);




