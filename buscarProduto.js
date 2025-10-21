// Função que busca um produto pelo nome
function buscarProduto(listaDeProdutos, nomeBuscado) {
  for (let i = 0; i < listaDeProdutos.length; i++) {
    if (listaDeProdutos[i].nome === nomeBuscado) {
      return listaDeProdutos[i]; // Retorna o objeto do produto encontrado
    }
  }
  return null; // Retorna null se não encontrar
}

// Exemplo de lista de produtos
const produtos = [
  { nome: "Camiseta", preco: 49.99 },
  { nome: "Calça Jeans", preco: 129.90 },
  { nome: "Tênis", preco: 199.99 },
  { nome: "Jaqueta", preco: 249.90 }
];

// Exemplo de uso da função
const produtoEncontrado = buscarProduto(produtos, "Tênis");
console.log(produtoEncontrado); // { nome: "Tênis", preco: 199.99 }

const produtoInexistente = buscarProduto(produtos, "Boné");
console.log(produtoInexistente); // null
