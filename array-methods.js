// Arquivo: array-methods.js
// Autora: Paula Azevêdo
// Idade: 39 anos
// Finalidade: Exercício de prática com funções, rest, spread, desestruturação e arrays

// 1. Função tradicional - soma dois números
function sum(a, b) {
  return a + b;
}

// 2. Arrow function - multiplica dois números
const multiply = (a, b) => a * b;

// 3. Função com rest parameters - calcula média
function calculateAverage(...numbers) {
  if (numbers.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

// 4. Nova função com rest - retorna o maior número
function findMax(...nums) {
  return Math.max(...nums);
}

// 5. Usando spread operator com arrays - juntando listas de jogos
const ps5Games = ["Astro Bot", "God of War", "Príncipe da Pérsia"];
const moreGames = ["ZAU", "Sackboy", "Guardiões da Galáxia"];
const allGames = [...ps5Games, ...moreGames];

// 6. Usando spread com objetos - informações da usuária
const person = { name: "Paula Azevêdo", age: 39 };
const gamer = { ...person, platform: "PlayStation 5", favoriteGenre: "Aventura" };

// 7. Desestruturação de objeto
const { name, age } = person;
console.log(`Nome da jogadora: ${name}, Idade: ${age}`);

// 8. Desestruturação de array
const [top1, top2, ...resto] = allGames;
console.log("Jogos favoritos:", top1, top2);
console.log("Outros jogos jogados:", resto);

// 9. Usando map com arrow function para simular níveis completados
const gameProgress = [20, 45, 80]; // porcentagem de conclusão
const doubledProgress = gameProgress.map(p => p * 2); // apenas para exemplo

// Testando todas as funções
console.log("Soma:", sum(5, 3));
console.log("Multiplicação:", multiply(5, 3));
console.log("Média de 3 números:", calculateAverage(4, 6, 8));
console.log("Média de 5 números:", calculateAverage(4, 6, 8, 10, 12));
console.log("Maior número:", findMax(4, 10, 2, 99, 21));
console.log("Jogos combinados:", allGames);
console.log("Informações da jogadora:", gamer);
console.log("Progresso dobrado (simulado):", doubledProgress);

// --- Exercício 2: forEach e map ---
// Lista de produtos personalizados
const products = [
  { id: 1, name: "Caderno de Desenho", price: 25, category: "Papelaria" },
  { id: 2, name: "Tablet Digital", price: 1200, category: "Tecnologia" },
  { id: 3, name: "Tinta para Tatuagem", price: 80, category: "Tatuagem" },
  { id: 4, name: "Caneta Nanquim", price: 20, category: "Arte" },
  { id: 5, name: "Livro de Magia", price: 50, category: "Espiritualidade" },
];

// 1. Usando forEach para imprimir todos os produtos
console.log("\nLista de Produtos:");
products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - R$${product.price}`);
});

// 2. Usando map para criar um novo array apenas com nomes dos produtos
const productNames = products.map((product) => product.name);
console.log("\nNomes dos Produtos:", productNames);

// 3. Usando map para criar um array de produtos com desconto de 10%
const discountedProducts = products.map((product) => {
  return {
    ...product,
    price: product.price * 0.9, // 10% de desconto
  };
});

console.log("\nProdutos com 10% de desconto:");
discountedProducts.forEach((product) => {
  console.log(
    `${product.name} - Original: R$${(product.price / 0.9).toFixed(2)}, Com desconto: R$${product.price.toFixed(2)}`
  );
});


// Exercício 3: filter e find (versão personalizada para Paula Azevêdo)

const students = [
  { id: 1, name: "Paula Azevêdo", age: 39, grades: [90, 88, 95], active: true },
  { id: 2, name: "Rayssa Simões", age: 19, grades: [70, 75, 80], active: true },
  { id: 3, name: "Nay Rodrigues", age: 29, grades: [60, 65, 58], active: false },
  { id: 4, name: "Gracielen Lima", age: 19, grades: [95, 91, 89], active: true },
  { id: 5, name: "Sigmund Freud", age: 10, grades: [85, 84, 86], active: false },
]

// 1. Usando filter para encontrar estudantes com idade >= 30
const olderStudents = students.filter((student) => student.age >= 30)
console.log("1. Estudantes com 30 anos ou mais:")
olderStudents.forEach((student) => console.log(student.name))

// 2. Usando find para encontrar o primeiro estudante com nota > 90
const studentWithHighGrade = students.find((student) => {
  return student.grades.some((grade) => grade > 90)
})
console.log("\n2. Primeiro estudante com nota acima de 90:", studentWithHighGrade.name)

// 3. Usando filter para encontrar estudantes ativos com média acima de 85
const highPerformingActiveStudents = students.filter((student) => {
  const average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length
  return student.active && average > 85
})

console.log("\n3. Estudantes ativos com média acima de 85:")
highPerformingActiveStudents.forEach((student) => console.log(student.name))

const tasks = [
  { id: 1, title: "Jogar PS5 - Sessão de Relaxamento", completed: false, priority: "média" },
  { id: 2, title: "Estudar novas cartas de tarô", completed: true, priority: "alta" },
  { id: 3, title: "Meditação guiada", completed: false, priority: "alta" },
  { id: 4, title: "Ritual de limpeza energética", completed: true, priority: "baixa" },
  { id: 5, title: "Aula do curso tech: Git e GitHub", completed: false, priority: "alta" },
  { id: 6, title: "Praticar programação JavaScript", completed: false, priority: "alta" },
]

// 1. Encontrar o índice da tarefa "Meditação guiada"
const meditationIndex = tasks.findIndex(task => task.title === "Meditação guiada")
console.log("Índice da tarefa 'Meditação guiada':", meditationIndex)

// 2. Verificar se existe pelo menos uma tarefa de alta prioridade
const hasHighPriority = tasks.some(task => task.priority === "alta")
console.log("\nExiste pelo menos uma tarefa de alta prioridade:", hasHighPriority)

// 3. Verificar se todas as tarefas foram concluídas
const allCompleted = tasks.every(task => task.completed)
console.log("\nTodas as tarefas concluídas:", allCompleted)

// 4. Encontrar tarefas incompletas e de alta prioridade
const incompleteHighPriority = tasks.filter(task => !task.completed && task.priority === "alta")
console.log("\nTarefas incompletas de alta prioridade:")
incompleteHighPriority.forEach(task => console.log("-", task.title))
