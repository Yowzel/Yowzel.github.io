let input;
let h2;

window.onload= function() {
    input = document.getElementById("info");
    h2 = document.getElementById("localinfo");
    const button = document.getElementById("saveinfo");
    const button2 = document.getElementById("displayinfo");
    const button3 = document.getElementById("clearinfo");
    button.addEventListener("click", save);
    button2.addEventListener("click", display);
    button3.addEventListener("click", clear);
}

function clear() {
    localStorage.clear();
    h2.innerHTML = "just cleared! you are not reset!";
    console.log("you just cleared the local storage");
}

function save() {
    localStorage.setItem('value', input.value);
}

function display() {
    if(!localStorage.getItem('value')){
        h2.innerHTML = "Hey remember to click the save button!";
    } else{
        h2.innerHTML = localStorage.getItem('value');
        console.log(localStorage.getItem('value'));
    }
    
}

