// biz logic
// time LOGIc

var myVar;

function timerFunction() {
    myVar = setInterval(alertFunc, 800);
}

function alertFunc() {
    console.log(simonArray);
}

function myStopFunction() {
    clearInterval(myVar);
}

 //AMELIA'S BIZ
//continuous values for each button
var redButton = 1;
var blueButton = 2;
var greenButton = 3;
var yellowButton = 4;
 ///array of user presses
var userArray = [];
//function to clear userArray
var clear = function(){
 }
 //how many times each button is clicked
var redPress = 0;
var bluePress = 0;
var greenPress = 0;
var yellowPress = 0;
 //RICHARD'S BIZ
function rndNumber() {
  return Math.floor(Math.random() * 4) + 1;
};

// array of computer-generated presses
 simonArray = [];

 // generate random number between 1 and 4
 function rndArray() {
  for (var i = 0; i < array.length; i++) {
    simonArray.push(x);
  }
};
// play audio
function playSample(sampleName) {
  var sample = document.getElementById(sampleName);
    if (sample.paused) {
        sample.play();
    }else{
        sample.currentTime = 0
    }
}



 // user logic
$(document).ready(function() {
//AMELIA'S USER LOGIC
  $("#q1").click(function(){
    userArray.push(greenButton);
     greenPress += 1;
     playSample("green-sound");
     $("#q2").removeAttr('style');
     $("#q3").removeAttr('style');
     $("#q4").removeAttr('style');
     $("#q1").css("background-image", "radial-gradient(white, #0bc455, #194c2d)");
     console.log(userArray);
     //console.log(greenPress);
  });
  $("#q2").click(function(){
    userArray.push(redButton);
     redPress += 1;
     playSample("red-sound");
     $("#q1").removeAttr('style');
     $("#q3").removeAttr('style');
     $("#q4").removeAttr('style');
     $("#q2").css("background-image", "radial-gradient(white, #e00808, #4c1818)");
     console.log(userArray);
     //console.log(redPress);
  });
  $("#q3").click(function(){
    userArray.push(yellowButton);
     yellowPress += 1;
     playSample("yellow-sound");
     $("#q1").removeAttr('style');
     $("#q2").removeAttr('style');
     $("#q4").removeAttr('style');
     $("#q3").css("background-image", "radial-gradient(white, #c0c40b, #484c19)");
     console.log(userArray);
   //console.log(yellowPress);
  });
  $("#q4").click(function(){
    userArray.push(blueButton);
     bluePress += 1;
     playSample("blue-sound");
     $("#q1").removeAttr('style');
     $("#q2").removeAttr('style');
     $("#q3").removeAttr('style');
     $("#q4").css("background-image", "radial-gradient(white, #0b45c4, #19224c)");
     console.log(userArray);
     //console.log(bluePress);
  });

 //RICHARD'S USER LOGIC
  $("#test-button").click(function(event) {
    event.preventDefault();
    x = rndNumber();
    simonArray.push(x);
    console.log(simonArray);
  });

  $(document).ready(function() {
  $("#new-button").click(function(event) {
    event.preventDefault();

    timerFunction();

  });
});

$(document).ready(function() {
  $("#stop-time").click(function(event) {
    event.preventDefault();

    myStopFunction();

  });
});
 //AZUl'S USER LOGIC
  $("#compareBtn").click(function() {
    if (simonArray.toString() === userArray.toString()) {
      alert("Your memory is impeccable!")
    }
     else if (simonArray.toString() != userArray.toString()) {
      alert("Womp, womp. Try again!")
    }
     else {
      alert("Oh, oh. You broke the game.")
    };
});
 });
