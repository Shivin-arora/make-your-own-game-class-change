/*var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;

var database;

var form, player, game;
function preload(){
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
}


function draw(){
background("blue");  
}
*/

var callOut;
var t1;
var board;
var boardrs=[];
var board1r=[];
var board2r=[];
var board3r=[];
var ticket;


function setup(){

  //creating canvas with size of display
  createCanvas(displayWidth,displayHeight);

 //calling the generateTicket function from lib.js
 ticket = generateTicket();

 //creating the board with random sequence class(sorted)
 board = new Sequence(1,90,90);

//generating a ticket for the player
 t1 =new Ticket();

 boardrs.push(board1r,board2r,board3r);



for(var i = 1; i< 11 ; i++){
  boardrs[0].push(createButton(i).class('brs'));
}

}
function draw(){
  background(255);
 
 //displaying the objects
board.display();
  board.sortArray();
  t1.display();
}


//function for calling out unique random numbers using frameCount
function ourWork(){
  if(frameCount % 60 == 0){
    callOut = Math.round(random(0,arr.length-1));
   
    textSize(20);
    text(arr[callOut],100,100);
    arr.splice(callOut,1);
  }
}