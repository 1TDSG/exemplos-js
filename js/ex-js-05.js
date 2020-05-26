/*
Ex-4
lampada que acende ao passar o mouse sobre ela!
id = img-lmp
*/

function acende(elemento) {
  elemento.src = "./img/lampada-on.gif";
}

function apaga(elemento) {
  elemento.src = "./img/lampada.gif";
}

/*
Adorei realizar este Exercício

Ex-6
Ex-7
*/
function alteraCor(elemento) {
  if(elemento.name == "verde"){
    elemento.style.backgroundColor = "#00ff00";
  }else if(elemento.name == "vermelho"){
    elemento.style.backgroundColor = "#ff0000";
  }else{
    elemento.style.backgroundColor = "#ff00ff";
  }
}

/*
Adorei realizar este Exercício

Ex-8

*/

function insereNaDiv() {
  document.getElementById('ex').innerHTML = "Esse texto foi inserido pelo JavaScript...";
}

/*
Adorei realizar este Exercício
Ex-9
*/

function insereNaDiv2() {
  document.getElementById('ex').innerHTML = "Esse texto foi inserido pelo JavaScript, atrvés de um Botão...";
}
