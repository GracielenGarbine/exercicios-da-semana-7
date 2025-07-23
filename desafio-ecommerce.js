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
  {
    id: 8,
    name: "Cafeteira",
    price: 100,
    stock: 8,
    category: "Cozinha",
    reviews: [3, 2, 5, 4, 2],
  },
];

// 1. Mostrar lista formatada com forEach
console.log("1. Lista de Produtos:");
inventory.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - Categoria: ${product.category} - Preço: R$${product.price} - Estoque: ${product.stock}`);
});

// 2. Filtrar produtos em estoque (stock > 0)
const inStock = inventory.filter(product => product.stock > 0);
console.log("\n2. Produtos em estoque:");
inStock.forEach(p => console.log(`- ${p.name}`));

// 3. Filtrar eletrônicos com preço < 1000
const affordableElectronics = inventory.filter(product => product.category === "Tecnologia" && product.price < 1000);
console.log("\n3. Eletrônicos com preço abaixo de R$1000:");
affordableElectronics.forEach(p => console.log(`- ${p.name} - R$${p.price}`));

// 4. Verificar se há algum produto sem estoque
const anyOutOfStock = inventory.some(product => product.stock === 0);
console.log("\n4. Existe produto sem estoque?", anyOutOfStock);

// 5. Verificar se todos os produtos têm pelo menos uma avaliação
const allHaveReviews = inventory.every(product => product.reviews && product.reviews.length > 0);
console.log("\n5. Todos os produtos têm avaliações?", allHaveReviews);

// 6. Encontrar índice do produto "Cafeteira"
const coffeeMakerIndex = inventory.findIndex(product => product.name === "Cafeteira");
console.log("\n6. Índice do produto 'Cafeteira':", coffeeMakerIndex);

// 7. Encontrar o primeiro produto da categoria "Vestuário"
const firstClothing = inventory.find(product => product.category === "Vestuário");
console.log("\n7. Primeiro produto da categoria 'Vestuário':", firstClothing ? firstClothing.name : "Nenhum encontrado");

// 8. Função de busca por nome contendo termo específico
function searchProducts(term) {
  term = term.toLowerCase();
  return inventory.filter(product => product.name.toLowerCase().includes(term));
}
// Exemplo de busca
console.log("\n8. Produtos contendo 'jeans':");
searchProducts("jeans").forEach(p => console.log(`- ${p.name}`));

// 9. Calcular média de avaliações e adicionar propriedade averageRating
inventory.forEach(product => {
  const avg = product.reviews.reduce((sum, r) => sum + r, 0) / product.reviews.length;
  product.averageRating = Number(avg.toFixed(2));
});
console.log("\n9. Produtos com média das avaliações adicionada:");
inventory.forEach(p => console.log(`- ${p.name}: ${p.averageRating}`));

// 10. Encontrar produto com maior média de avaliações
const bestProduct = inventory.reduce((best, product) => (product.averageRating > best.averageRating ? product : best));
console.log(`\n10. Produto com maior média de avaliações: ${bestProduct.name} (${bestProduct.averageRating})`);