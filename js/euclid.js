"use strict";

var string = "";

function takeInput(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    return [a,b];
}

function hcf(a,b){
    while (remainder != 0){
        var multiple = Math.floor(a/b);
        var remainder = a%b;
        string += a + " = " + multiple + " * " + b + " + " + remainder + "<br>";
        a = b;
        b = remainder;
    }
    string+= "Highest common factor = " + a;
    document.getElementById("output").innerHTML=string;
}

function start(){
    var input = takeInput();
    var a = input[0];
    var b = input[1];
    hcf(a,b)
}


