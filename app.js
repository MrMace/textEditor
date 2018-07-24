document.getElementById("heading").innerHTML = localStorage["title"] || "Type Something"; //default text
document.getElementById("content").innerHTML = localStorage["text"]|| "The text saves automatically every second."; //default text

setInterval(function() {

    //function that saves the innterHTML of the div.
    localStorage["title"]  = document.getElementById("heading").innerHTML; //heading div
    localStorage["text"]  = document.getElementById("content").innerHTML; //content div
}, 1000);