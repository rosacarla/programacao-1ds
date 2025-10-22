/* 🎯INTRODUÇÃO 
Na programação, usamos estruturas de repetição para executar ações várias vezes. 
O laço while é indicado quando não sabemos quantas vezes a ação será repetida. 
Ele depende de uma condição lógica que deve ser verdadeira para continuar repetindo.
☑ Exemplo 1: Substituir o for por while é possível. */

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
console.log(); // Imprime uma linha em branco

// ☑ Etapas lógicas envolvidas:
// Lógica: repetir 5 vezes, começando em 1 e aumentando até 5. 

/* ☑  CASOS EXCLUSIVOS DO while
🧠 Exemplos com lógica aplicada: teste os códigos no Programiz mais de uma vez, complete as lacunas da descrição da sua lógica.

☑  Exemplo 2: Validar entrada até ser um número entre 1 e 10 */
let numero = parseInt(prompt("Digite um número entre 1 e 10:"));
while (isNaN(numero) || numero < 1 || numero > 10) {
  numero = parseInt(prompt("Valor inválido. Digite um número entre 1 e 10:"));
}
console.log("Número válido:", numero);
console.log(); // Imprime uma linha em branco
// Lógica: Enquanto o número digitado for inválido (NaN) ou estiver fora da faixa de 1 a 10, o programa deve solicitar novo valor.

//☑ Exemplo 3: Solicitar senha até que seja correta
let senha = "";
while (senha !== "1234") {
  senha = prompt("Digite a senha:");
}
console.log("Acesso liberado!");
console.log(); // Imprime uma linha em branco
// Lógica: Enquanto a senha digitada for diferente de "1234", o programa deve continuar solicitando uma nova senha.

// ☑ Exemplo 4: Somar valores digitados até ultrapassar 100
let soma = 0;
while (soma <= 100) {
  let valor = parseFloat(prompt("Digite um valor:"));
  if (!isNaN(valor)) {
    soma += valor;
  }
}
console.log("Soma final:", soma);
console.log(); // Imprime uma linha em branco
// Lógica: Enquanto a Lógica for menor ou igual a 100, o programa continua solicitando valores e acumulando o total.

// ☑ Exemplo 5: Gerar números aleatórios até sair um múltiplo de 7 (execute mais vezes para ver geração variada de números).
let number = 0;
while (number % 7 !== 0 || number === 0) {
  number = Math.floor(Math.random() * 100);
  console.log("Gerado:", number);
}
console.log("Múltiplo de 7 encontrado:", number);
console.log(); // Imprime uma linha em branco
// Lógica: Enquanto o número gerado não for múltiplo de 7 ou igual a 0, o programa continua gerando valores aleatórios.

// ☑ Exemplo 6: Solicitar palavra até que comece com “A”
let palavra = prompt("Digite uma palavra que comece com a letra A:");
while (palavra.charAt(0).toUpperCase() !== "A") {
  palavra = prompt("Tente novamente. Digite uma palavra que comece com A:");
}
console.log("Palavra aceita:", palavra);
// Lógica: Enquanto a 1ª letra da palavra digitada for diferente, o programa deve continuar solicitando uma nova palavra.
