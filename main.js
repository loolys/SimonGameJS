"use strict";

var greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

var currentClick = 0;
var arr = [];

function game (bool) {
    // the random number represent a color, I choose 1=green, 2=red, 3=yellow, 4=blue
    var random = Math.floor((Math.random() * 4) + 1);
    if (bool){
        // check if one more step should be added to the series.
        arr.push(random);
    }
    
    for (let i = 0; i < arr.length; i++){
        // let creates a new closure scope for each iteration of the loop
        if (arr[i] == 1){
            setTimeout( function timer(){
                greenSound.play();
                $("#green-button").css("background-color", "lightgreen");
                setTimeout(changeColor, 500, "green");
            }, i*1000);     
        } else if (arr[i] == 2) {
            setTimeout( function timer(){
                redSound.play();
                $("#red-button").css("background-color", "Tomato");
                setTimeout(changeColor, 500, "red");
            }, i*1000);    
        } else if (arr[i] == 3) {
            setTimeout( function timer(){
                yellowSound.play();
                $("#yellow-button").css("background-color", "lightyellow");
                setTimeout(changeColor, 500, "yellow");
            }, i*1000);    
        } else if (arr[i] == 4) {
            setTimeout( function timer(){
                blueSound.play();
                $("#blue-button").css("background-color", "Royalblue");
                setTimeout(changeColor, 500, "blue");
            }, i*1000);    
        }
    }
    
}


$(document).ready(function(){
   
    $("#start-button").click(function(){
        $("#status-text").text("Good luck");
        game(true);
    });
    
    $("#reset-button").click(function() {
        $("#status-text").text("Good luck");
        currentClick = 0;
        arr = [];
        game(true);
    });
    
    $("#green-button").click(function(){
        $("#status-text").text("Good luck");
        if (arr[currentClick] != 1){
            wrongAnswer();
            
        } else{
            
            greenSound.play();
            $("#green-button").css("background-color", "lightgreen");
            setTimeout(changeColor, 500, "green");
            currentClick += 1;
            correctAnswer();
        }
        
    });
    
    $("#red-button").click(function(){
        $("#status-text").text("Good luck");
        if (arr[currentClick] != 2){
            wrongAnswer();
        } else{
            redSound.play();
            $("#red-button").css("background-color", "Tomato");
            setTimeout(changeColor, 500, "red");
            currentClick += 1;
            correctAnswer();
        }
        
    });
    
    $("#yellow-button").click(function(){
        $("#status-text").text("Good luck");
        if (arr[currentClick] != 3){
            wrongAnswer();
        } else{
            yellowSound.play();
            $("#yellow-button").css("background-color", "lightyellow");
            setTimeout(changeColor, 500, "yellow");
            currentClick += 1;
            correctAnswer();
        }
        
    });
    
    $("#blue-button").click(function(){
        $("#status-text").text("Good luck");
        if (arr[currentClick] != 4){
            wrongAnswer();
        } else{
            blueSound.play();
            $("#blue-button").css("background-color", "RoyalBlue");
            setTimeout(changeColor, 500, "blue");
            currentClick += 1;
            correctAnswer();
        }
        
    });
});

function changeColor (color) {
    $("#" + color + "-button").css("background-color", color);
}

function wrongAnswer() {
    if ($("#strict-mode").is(":checked")){
        arr = [];
        currentClick = 0;
        $("#status-text").text("Wrong answer, press start to try again!");
    } else {
        $("#status-text").text("Wrong answer, here is the sequence again!");
        setTimeout(function wait(){
        currentClick = 0;
        game(false);
        }, 1000);
    }
}

function correctAnswer(){
    if (currentClick == 19)  {
        $("#status-text").text("You Won, the game will restart");
        currentClick = 0;
        arr = [];
        game(true);
    }else if (currentClick == arr.length){
        $("#current-step").text("Amount of steps: " + currentClick.toString());
        setTimeout(function wait(){
            currentClick = 0;
            game(true);
        }, 1000);

    }
}