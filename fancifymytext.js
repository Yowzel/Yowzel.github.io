function alertFunction () {
    document.getElementById("text").style.fontSize = "24pt";
}

function onChange(){
    if(document.getElementById("fancy").checked === true){
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").style.textDecoration = "underline";
    } else {
        document.getElementById("text").style.fontWeight ="normal";
    }

}

function mooFunction(){
    document.getElementById("text").value = document.getElementById("text").value.toUpperCase();
    var par = document.getElementById("text").value;
    var parts = par.split(".");
    par = parts.join("-Moo")
    document.getElementById("text").value = par;
}