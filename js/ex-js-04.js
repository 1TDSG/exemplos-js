/*
//alert("Olá Mundo!");

//Declarar variáveis
var nr1 = 0;
var nr2 = 0;
var resultado;
//Atribuir valores
nr1 = 1;
nr2 = 1;

//Executar operações
resultado = nr1+nr2;

//Apresentar o resultado
console.log("Resultado da operação: " + resultado);
*/

//A criação de funções
function soma(val1,val2) {
  var nr1 = val1;
  var nr2 = val2;
  alert("Resultado : " + (nr1+nr2));
  var elemento = document.getElementById('exemplo');
  elemento.innerHTML = "Resultado "+(nr1+nr2);
  elemento.style.backgroundColor = "#ff0000";
}
