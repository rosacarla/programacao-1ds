// 1. Imprima os múltiplos de 3 entre 3 e 30
for (let i = 3; i <= 30; i += 3) {
  console.log(i);
}
console.log();

// 2. Desafio lógico: como avançar de 3 em 3?
let inicio = 0;
let fim = 30;
let passo = 3;

for (let i = inicio; i <= fim; i += passo) {
  console.log(i);
}
console.log();

// 3. Imprima os números pares de 2 a 10
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
console.log();

// 4. Desafio lógico: como identificar ou gerar números pares?
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " é par");
  }
}
console.log();

// 5. Imprima "JavaScript é lógico!" 5 vezes
for (let i = 0; i < 5; i++) {
  console.log("JavaScript é lógico!");
}
console.log();

// 6. Desafio lógico: como repetir uma frase um número fixo de vezes?
let frase = "Estudar lógica é essencial!";
let repeticoes = 5;

for (let i = 0; i < repeticoes; i++) {
  console.log(frase);
}
