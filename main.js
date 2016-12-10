"use strict";

var arr = [1, 2, 1, 2];

function game () {
    var random = Math.floor((Math.random() * 4) + 1);
    arr.push(random);
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 1){
            setTimeout( function timer(){
                $("#green-button").css("background-color", "lightgreen");
                setTimeout(changeColor, 500, "green");
                console.log(i);
            }, i*1000);     
        } else if (arr[i] == 2) {
            setTimeout( function timer(){
                $("#red-button").css("background-color", "Tomato");
                setTimeout(changeColor, 500, "red");
                console.log(i);
            }, i*1000);    
        } else if (arr[i] == 3) {
            setTimeout( function timer(){
                $("#yellow-button").css("background-color", "lightyellow");
                setTimeout(changeColor, 500, "yellow");
                console.log(i);
            }, i*1000);    
        } else if (arr[i] == 4) {
            setTimeout( function timer(){
                $("#blue-button").css("background-color", "Royalblue");
                setTimeout(changeColor, 500, "blue");
                console.log(i);
            }, i*1000);    
        }
    }
}


$(document).ready(function(){
   
    $("#start-button").click(function(){
        game();
    });
    
    $("#green-button").click(function(){
        $("#green-button").css("background-color", "lightgreen");
        setTimeout(changeColor, 500, "green");
    });
    
    $("#red-button").click(function(){
        $("#red-button").css("background-color", "Tomato");
        setTimeout(changeColor, 500, "red");
    });
    
    $("#yellow-button").click(function(){
        $("#yellow-button").css("background-color", "lightyellow");
        setTimeout(changeColor, 500, "yellow");
    });
    
    $("#blue-button").click(function(){
        $("#blue-button").css("background-color", "RoyalBlue");
        setTimeout(changeColor, 500, "blue");
    });
});

function changeColor (color) {
    $("#" + color + "-button").css("background-color", color);
}