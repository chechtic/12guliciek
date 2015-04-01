document.getElementByClassName('dd').style.zIndex='1';

var el = document.getElementById("outside");
el.addEventListener("click", function(){modifyText("four")}, false);


function vidim(element) {
	alert(element);
    element.style.zIndex="1"
}
function nevidim(element) {
	alert(element);
    element.style.zIndex="-1"
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
