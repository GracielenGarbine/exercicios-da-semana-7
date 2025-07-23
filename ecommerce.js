// Inventário personalizado inspirado no universo da Paula Azevêdo

const inventory = [
  {
    id: 1,
    name: "Controle PS5 DualSense",
    price: 450,
    stock: 10,
    category: "Games",
    reviews: [5, 4, 5, 5, 5],
  },
  {
    id: 2,
    name: "Tablet para Desenho Digital",
    price: 1300,
    stock: 5,
    category: "Tecnologia",
    reviews: [5, 5, 5, 4, 5],
  },
  {
    id: 3,
    name: "Baralho de Tarô Rider-Waite",
    price: 80,
    stock: 20,
    category: "Espiritualidade",
    reviews: [5, 4, 4, 5, 5],
  },
  {
    id: 4,
    name: "Tintas para Tatuagem Profissionais",
    price: 120,
    stock: 8,
    category: "Tatuagem",
    reviews: [5, 5, 5, 4, 5],
  },
  {
    id: 5,
    name: "Fones de Ouvido Bluetooth",
    price: 150,
    stock: 15,
    category: "Tecnologia",
    reviews: [4, 4, 5, 5, 4, 4],
  },
  {
    id: 6,
    name: "Livro: Magia e Autoconhecimento",
    price: 60,
    stock: 12,
    category: "Espiritualidade",
    reviews: [5, 5, 4, 5, 5],
  },
  {
    id: 7,
    name: "Calça Jeans Confortável",
    price: 90,
    stock: 0,
    category: "Vestuário",
    reviews: [4, 3, 4],
  },
];

// Função para calcular a média das avaliações
function averageReview(reviews) {
  const sum = reviews.reduce((acc, r) => acc + r, 0);
  return (sum / reviews.length).toFixed(2);
}

// 1. Mostrar produtos disponíveis (stock > 0)
const availableProducts = inventory.filter(product => product.stock > 0);
console.log("Produtos disponíveis:");
availableProducts.forEach(product => {
  console.log(
    `${product.name} - Categoria: ${product.category} - Preço: R$${product.price} - Avaliação média: ${averageReview(product.reviews)}`
  );
});

// 2. Produtos na categoria 'Espiritualidade' com estoque disponível
const spiritualProducts = availableProducts.filter(product => product.category === "Espiritualidade");
console.log("\nProdutos em Espiritualidade disponíveis:");
spiritualProducts.forEach(product => console.log(product.name));

// 3. Produto com melhor avaliação média
const bestRatedProduct = inventory.reduce((best, product) => {
  return averageReview(product.reviews) > averageReview(best.reviews) ? product : best;
});
console.log(`\nProduto com melhor avaliação: ${bestRatedProduct.name} (${averageReview(bestRatedProduct.reviews)})`);

// 4. Calcular o valor total em estoque (quantidade * preço) de todos os produtos
const totalInventoryValue = inventory.reduce((total, product) => total + product.price * product.stock, 0);
console.log(`\nValor total em estoque: R$${totalInventoryValue.toFixed(2)}`);
