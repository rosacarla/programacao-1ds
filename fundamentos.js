// 05/09-PRÁTICA: fundamentos de programação JavaScript //

/* 1. O JavaScript, assim como outras linguagens, utiliza estruturas de controle para 
direcionar o fluxo da execução do programa, como no exemplo de código a seguir. */
let idade = 17;
if (idade >= 18) {
  console.log("Pode votar");
} else {
  console.log("Não pode votar");
}
console.log();

// 2. (...)

/* 3. Funções são blocos de código reutilizáveis que realizam uma tarefa específica, 
como exemplifica o seguinte trecho de código: */
function saudar(nome) {
  return "Olá, " + nome;
}
console.log(saudar("Ana")); // Saída: Olá, Ana
console.log();

// Código 9: Declarar variável idade e imprimir no console
let idadE = 30;
console.log(idadE);
console.log();

// Código 10: Função soma que retorna a soma de dois números
function soma(a, b) {
  return a + b;
}
// Exemplo de uso:
console.log(soma(5, 7)); // Saída: 12
console.log();

// Código 11: Verificar se um número é par ou ímpar usando if-else
let num = 10; // você pode mudar o valor para testar

if (num % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}
console.log();

// Código 12: Loop for que imprime letras de A a Z
for (let i = 65; i <= 90; i++) {
  console.log(String.fromCharCode(i));
}
console.log();

// Código 13: Calcular a média de três números e imprimir
let n1 = 10;
let n2 = 20;
let n3 = 30;

let media = (n1 + n2 + n3) / 3;
console.log("A média é: " + media);
console.log();

// Código 14: Corrigir erro em console.log para imprimir "Olá, mundo!"
console.log("Olá, mundo!");
console.log();

// Código 15: Usar while para imprimir números de 5 a 1 decrescendo
let i = 5;

while (i >= 1) {
  console.log(i);
  i--;
}
console.log();

// Código 16: Função com debugger para pausar antes de retornar resultado
function calcularProduto(a, b) {
  let resultado = a * b;
  debugger;  // A execução vai pausar aqui se as ferramentas de desenvolvedor estiverem abertas
  return resultado;
}
// Chame a função para ativar o debugger
calcularProduto(5, 10);
