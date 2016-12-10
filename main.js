"use strict";

$(document).ready(function(){
   
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