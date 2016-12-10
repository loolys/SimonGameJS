"use strict";

var greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

var currentClick = 0;
var arr = [];

function game () {
    var random = Math.floor((Math.random() * 4) + 1);
    arr.push(random);
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
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
        game();
    });
    
    $("#green-button").click(function(){
        if (arr[currentClick] != 1){
            console.log("wrong");
            arr = [];
            currentClick = 0;
            game();
        } else{
            
            greenSound.play();
            $("#green-button").css("background-color", "lightgreen");
            setTimeout(changeColor, 500, "green");
            currentClick += 1;
            console.log(currentClick);
            if (currentClick == arr.length){
                setTimeout(function wait(){
                    currentClick = 0;
                    game();
                }, 1000);
                
            }
        }
        
    });
    
    $("#red-button").click(function(){
        if (arr[currentClick] != 2){
            console.log("wrong");
            arr = [];
            currentClick = 0;
            game();
        } else{
            redSound.play();
            $("#red-button").css("background-color", "Tomato");
            setTimeout(changeColor, 500, "red");
            currentClick += 1;
            console.log(currentClick);
            if (currentClick == arr.length){
                setTimeout(function wait(){
                    currentClick = 0;
                    game();
                }, 1000);
                
            }
        }
        
    });
    
    $("#yellow-button").click(function(){
        if (arr[currentClick] != 3){
            console.log("wrong");
            arr = [];
            currentClick = 0;
            game();
        } else{
            yellowSound.play();
            $("#yellow-button").css("background-color", "lightyellow");
            setTimeout(changeColor, 500, "yellow");
            currentClick += 1;
            console.log(currentClick);
            if (currentClick == arr.length){
                setTimeout(function wait(){
                    currentClick = 0;
                    game();
                }, 1000);
                
            }
        }
        
    });
    
    $("#blue-button").click(function(){
        if (arr[currentClick] != 4){
            console.log("wrong");
            arr = [];
            currentClick = 0;
            game();
        } else{
            blueSound.play();
            $("#blue-button").css("background-color", "RoyalBlue");
            setTimeout(changeColor, 500, "blue");
            currentClick += 1;
            console.log(currentClick);
            if (currentClick == arr.length){
                setTimeout(function wait(){
                    currentClick = 0;
                    game();
                }, 1000);
                
            }
        }
        
    });
});

function changeColor (color) {
    $("#" + color + "-button").css("background-color", color);
}