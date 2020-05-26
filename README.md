# exemplos-js
Exemplos básicos sobre Javascript.

## Declaração de variáveis:
var nome;
var nr;

# Concatenando variáveis:
var result = nome + " " + nr;

# Apresentando o resultado no console do navegador.
console.log("Resultado da concatenação : " + result);

# Apresentando o resultado em uma função alert('').
alert("Resultado da concatenação : " + result);

#Criando uma função
function funcaoNome(parametros)(){
  //codigo a ser executado
  "A funçao pode ou não ter parametros..."
}
#Ex:
function minhaFuncao(){
  console.log("Exemplo de funçao!")
}

//Aqui a função é chamada!!
minhaFuncao();
//A função pode ser chamada também de dentro do HTML no eventos ocorridos de mouse ou de teclas.

#DOM = document e suas funções
//Aqui nós vimos apenas getElementById(''), realizando a seleção de elementos e passando dados, assim como alterando propriedades.
//Um exemplo bem legal da utilização desta função do DOM é a capacidade de criar variáveis a partir do elementos.
#Ex
var elemento = document.getElementById('id');
elemento.style.backgroundColor = "#ff0000";
