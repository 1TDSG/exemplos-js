// EX 4 //

function turnON(element) {
  element.src="./img/lampada-on.gif";
}

function turnOFF(element) {
  element.src="./img/lampada.gif";
}
// EX 6//
// EX 7//
function changeColor(element) {
  if (element.name == "green") {
    element.style.backgroundColor = "#00ff00"
  }else if (element.name == "red") {
    element.style.backgroundColor = "#ff0000"
  }else{
    element.style.backgroundColor = "#ff00ff"
  }
}

// EX 8 //
function insereNaDiv() {
  document.getElementById('ex').innerHTML = "Esse texto foi inserido pelo JavaScript"
}

// EX 9 //
function insereNaDiv2() {
  document.getElementById('ex').innerHTML = "Esse texto foi inserido pelo JavaScript, através do botão"
}
