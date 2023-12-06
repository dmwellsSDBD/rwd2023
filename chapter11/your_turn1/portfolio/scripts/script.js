/*
    Student Name: Maria Cruz
    File Name: script.js
    Date: May 20, 2021
*/

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
        menu.style.backgroundColor = "#e2eae2";
    }
}
