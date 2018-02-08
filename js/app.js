var finish;
function origin() {
    var imagenes = document.querySelectorAll("#cajaimagen img");
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("dragstart", dragstart);
        imagenes[i].addEventListener("dragend",finished);
    }
    finish = document.getElementById("zonadestino");
    
    finish.addEventListener("dragover", function (e) {
        e.preventDefault();
    }, false);
    finish.addEventListener("drop", drop);
    finish.addEventListener("dragenter",dragenter);
    finish.addEventListener("dragleave",dragleave);
  
}
function dragstart(e) {
    var elemento = e.target;
    e.dataTransfer.setData("Text", elemento.getAttribute("id"));
}
function drop(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("Text");
    var src = document.getElementById(id).src;
    finish.innerHTML = "<img src='" +src + "'>";
}
function dragenter(e) {
    e.preventDefault();
    finish.style.background = "rgba(8,252,25,.12)";
}
function dragleave(e) {
    e.preventDefault();
    finish.style.background = "#ffff";
}
function finished(e) {
    var elemento =e.target;
    elemento.style.visibility = "hidden";
}

window.addEventListener("load", origin);
