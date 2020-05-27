// exe -01
function alerta(){
  alert('Ola mundo')
}
// exe -02
function calcular() {
  var nr1 = document.getElementById('n1');
  var nr2 =  document.getElementById('n2');
  var n1 = Number(nr1.value)
  var n2 = Number(nr2.value)
  var soma = n1+n2
  res.innerHTML= `O resultado é: ${soma}`
}
//exe 03 "COMENTANDO O EXERCICIO (PASSO 5)"
function letras(){
  var l1= document.getElementById('letra01');
  var exibir = document.getElementById('exibir');
  exibir.innerHTML = `A quantidade de letras é: ${l1.value.length}`
}
//exe -04
function acende(lampada){
  lampada.src ="./img/lampada-on.gif"
}
function apaga(lampada){
  lampada.src = "./img/lampada.gif"
}
/* exe 06 
Comentários de varias
linhas */
function clique(){
  var bt = document.getElementById('clique').style.backgroundColor = 'green';

}
function clique2(){
  var bt = document.getElementById('clique2').style.backgroundColor = 'red';

}
// exe 08
function carregar(){
  document.getElementById('resultado').innerHTML = "Esse texto foi inserido pelo JavaScript..."
}

//exe 09
function load(){
  document.getElementById('ex').innerHTML = "Esse texto foi inserido pelo JavaScript pelo botão..."
  
}
