//4

var imgElement = document.getElementById("imgLampada");

function acende() {
    imgElement.src = "img/lampada-on.gif";
}

function apaga() {
    imgElement.src = "img/lampada.gif";
}



//7
function alteraCor(buttonElement) {
    if (buttonElement.name == "verde") {
        buttonElement.style.backgroundColor = "#00ff00";
    } else if (buttonElement.name == "vermelho") {
        buttonElement.style.backgroundColor = "#ff0000";
    } else {
        buttonElement.style.backgroundColor = "#ff00ff";
    }
}

//8

var buttonElement = document.getElementById('umbotao');
var textElement = document.getElementById('resultado');

function addText() {
    document.getElementById('resultado').innerHTML = "Esse texto foi inserido pelo JavaScript";
}