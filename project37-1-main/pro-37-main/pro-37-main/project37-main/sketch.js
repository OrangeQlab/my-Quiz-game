var canvas, backgroundImage;
var gameState=0
var allContestants
var contestantCount=0
var answer,database

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz=new Quiz()
  quiz.getState()
  quiz.start()
  
  
  
  
}


function draw(){
  background("orange");
 if(contestantCount===2){
   quiz.update(1)
 }
 if(gameState===1){
   quiz.play()
 } 
  
  
  
  
  
}
