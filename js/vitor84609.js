  console.log("Hello World!");
  //  EX1
  var num1 = 10;
  var num2 = 10;
  var result = num1+num2;
  console.log("Resultado: " + result);

  // EX 2
/*function verQtdLetras1() {
  var div1 = document.getElementById('elem-1');
  console.log("Quantidade de letras: " + div1.innerHTML.length);
}

function verQtdLetras2() {
  var div1 = document.getElementById('elem-2');
  console.log("Quantidade de letras: " + div1.innerHTML.length);
}

function verQtdLetras3() {
  var div1 = document.getElementById('elem-3');
  console.log("Quantidade de letras: " + div1.innerHTML.length);
}*/

function verQtdLetras(element) {
  console.log("Quantidade de letras: " + element.innerHTML.length);
}

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
