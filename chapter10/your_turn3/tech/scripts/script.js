/*
    Group Members: Jamal Williams, Eric Jones, Laura Smith, Sofia Perez
    File Name: script.js
    Date: May 20, 2021
*/

//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
    } else {
        navlinks.style.display = "block";
        navlinks.style.backgroundColor = "#5371a9";
    }
}

//Function to display more information
function info() {
    var more = document.getElementById("frame");
    more.firstChild.nodeValue = "Tensor Flow by Google is today's most popular Deep Learning framework.";
    more.style.color = "#f59042";
    more.style.fontSize = "2em";
}