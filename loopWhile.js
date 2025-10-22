/* 1. Desafio: como medir o tamanho da palavra? Solicite ao usuário uma palavra até que ela tenha mais de 8 letras. Copie o seu código aqui. ⬇️ */
let palavra = prompt("Digite uma palavra com mais de 8 letras:");
while (palavra.length <= 8) {
  palavra = prompt("Palavra muito curta. Digite uma palavra com mais de 8 letras:");
}
console.log("Palavra válida:", palavra);
console.log();

/* 2. Desafio: como acumular valores imprevisíveis? Gere números aleatórios até que a soma deles ultrapasse 500. Copie o seu código aqui. ⬇️ */
let soma = 0;
while (soma <= 500) {
  let numero = Math.floor(Math.random() * 100);
  console.log("Número gerado:", numero);
  soma += numero;
}
console.log("Soma total:", soma);
console.log();

/* 3. Desafio: como verificar se um número está dentro de uma faixa indicada? Solicite ao usuário um número de tamanho  de calçado entre 34 e 44 até que ele digite corretamente. Copie o seu código aqui. ⬇️ */
let numero = parseInt(prompt("Digite o número do seu calçado (entre 34 e 44):"));
while (isNaN(numero) || numero < 34 || numero > 44) {
  numero = parseInt(prompt("Número inválido. Digite um número entre 34 e 44:"));
}
console.log("Número de calçado aceito:", numero);
console.log();

/* 4. Desafio: como testar múltiplas condições? Gere números até encontrar um que seja múltiplo de 3 e de 5 ao mesmo tempo. Copie o seu código aqui. ⬇️ */
let number = 0;
while (number % 3 !== 0 || number % 5 !== 0 || number === 0) {
  number = Math.floor(Math.random() * 100);
  console.log("Gerado:", number);
}
console.log("Número múltiplo de 3 e 5:", number);
console.log();

/* 5. Desafio: como saber se a idade digitada é aceitável e está na faixa correta? Peça ao usuário uma idade até que ela esteja entre 18 e 60. Copie o seu código aqui. ⬇️ */
let idade = parseInt(prompt("Digite sua idade (entre 18 e 60):"));
while (isNaN(idade) || idade < 18 || idade > 60) {
  idade = parseInt(prompt("Idade inválida. Digite uma idade entre 18 e 60:"));
}
console.log("Idade válida:", idade);
console.log();

/* 6. Desafio: como verificar presença de caracteres? Peça ao usuário uma senha até que contenha pelo menos 1 letra e 1 número. Use as dicas do quadro ao lado. Copie o seu código aqui. ⬇️ */ 
function temLetraENumero(senha) {
  return /[a-zA-Z]/.test(senha) && /[0-9]/.test(senha);
}

let senha = prompt("Digite uma senha com pelo menos 1 letra e 1 número:");
while (!temLetraENumero(senha)) {
  senha = prompt("Senha inválida. Deve conter pelo menos 1 letra e 1 número:");
}
console.log("Senha válida:", senha);
