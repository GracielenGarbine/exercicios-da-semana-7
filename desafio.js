// Arquivo: desafio.js
// Autora: Paula Azevêdo
// Finalidade: Praticar funções com objetos, rest e spread

// 1. Função que recebe um objeto "person" e retorna um novo com a propriedade "isAdult"
function addIsAdult(person) {
  // Verifica se a idade é maior ou igual a 18 e adiciona a propriedade
  return {
    ...person,
    isAdult: person.age >= 18
  };
}

// Exemplo de uso:
const personagem1 = { name: "Luna", age: 17 };
const personagem2 = { name: "Kratos", age: 40 };

console.log("Personagem 1:", addIsAdult(personagem1));
console.log("Personagem 2:", addIsAdult(personagem2));


// 2. Função que aceita múltiplos arrays e retorna um único array combinado
function combineArrays(...arrays) {
  // Usa spread para combinar todos os arrays recebidos
  return [].concat(...arrays);
}

// Exemplo de uso com jogos
const jogosAventura = ["God of War", "ZAU"];
const jogosInfantis = ["Astro Bot", "Sackboy"];
const jogosHeróis = ["Guardiões da Galáxia"];

const bibliotecaJogos = combineArrays(jogosAventura, jogosInfantis, jogosHeróis);
console.log("Biblioteca combinada de jogos:", bibliotecaJogos);


// --- Desafio Exercício 2 ---
// Reutilizando o array de produtos
const products = [
  { id: 1, name: "Caderno de Desenho", price: 25, category: "Papelaria" },
  { id: 2, name: "Tablet Digital", price: 1200, category: "Tecnologia" },
  { id: 3, name: "Tinta para Tatuagem", price: 80, category: "Tatuagem" },
  { id: 4, name: "Caneta Nanquim", price: 20, category: "Arte" },
  { id: 5, name: "Livro de Magia", price: 50, category: "Espiritualidade" },
];

// 1. Criar array de strings: "Nome do produto - Categoria"
const productDescriptions = products.map(product => `${product.name} - ${product.category}`);
console.log("\n1. Descrições formatadas:");
console.log(productDescriptions);

// 2. Criar array de preços com 15% de imposto
const taxedPrices = products.map(product => {
  return {
    name: product.name,
    originalPrice: product.price,
    priceWithTax: (product.price * 1.15).toFixed(2)
  };
});
console.log("\n2. Preços com 15% de imposto:");
console.table(taxedPrices);

// 3. Calcular valor total de todos os produtos com forEach e acumulador externo
let total = 0;
products.forEach(product => {
  total += product.price;
});
console.log("\n3. Valor total de todos os produtos: R$" + total.toFixed(2));


// --- Desafio 3 ---
// Lista personalizada de estudantes
const students = [
  { id: 1, name: "Paula Azevêdo", age: 39, grades: [90, 88, 95], active: true },
  { id: 2, name: "Rayssa Simões", age: 19, grades: [70, 75, 80], active: true },
  { id: 3, name: "Nay Rodrigues", age: 25, grades: [60, 65, 58], active: false },
  { id: 4, name: "Gracielen Lima", age: 19, grades: [95, 91, 89], active: true },
  { id: 5, name: "Sigmund Freud", age: 10, grades: [85, 84, 86], active: false },
];

// 1. Filtrar estudantes inativos
const inactiveStudents = students.filter(student => !student.active);
console.log("\n1. Estudantes inativos:");
inactiveStudents.forEach(student => console.log(student.name));

// 2. Encontrar o estudante com id = 3
const studentId3 = students.find(student => student.id === 3);
console.log("\n2. Estudante com ID = 3:", studentId3.name);

// 3. Filtrar estudantes com pelo menos uma nota abaixo de 70
const studentsWithLowGrades = students.filter(student =>
  student.grades.some(grade => grade < 70)
);
console.log("\n3. Estudantes com pelo menos uma nota abaixo de 70:");
studentsWithLowGrades.forEach(student => console.log(student.name));

// 4. Filtrar estudantes com média > 85 e retornar apenas os nomes
const highAverageNames = students
  .filter(student => {
    const average = student.grades.reduce((sum, g) => sum + g, 0) / student.grades.length;
    return average > 85;
  })
  .map(student => student.name);

console.log("\n4. Nomes dos estudantes com média acima de 85:");
console.log(highAverageNames);


// Lista personalizada de tarefas
const tasks = [
  { id: 1, title: "Jogar PS5 - Sessão de Relaxamento", completed: false, priority: "média" },
  { id: 2, title: "Estudar novas cartas de tarô", completed: true, priority: "alta" },
  { id: 3, title: "Meditação guiada", completed: false, priority: "alta" },
  { id: 4, title: "Ritual de limpeza energética", completed: true, priority: "baixa" },
  { id: 5, title: "Aula do curso tech: Git e GitHub", completed: false, priority: "alta" },
  { id: 6, title: "Praticar programação JavaScript", completed: false, priority: "alta" },
]

// 1. Encontrar a posição da primeira tarefa incompleta
const firstIncompleteIndex = tasks.findIndex(task => !task.completed)
console.log("1. Índice da primeira tarefa incompleta:", firstIncompleteIndex)

// 2. Verificar se existe alguma tarefa de baixa prioridade completa
const hasLowPriorityCompleted = tasks.some(task => task.priority === "baixa" && task.completed)
console.log("2. Existe tarefa de baixa prioridade concluída?", hasLowPriorityCompleted)

// 3. Verificar se todas as tarefas de alta prioridade estão incompletas
const allHighPriorityIncomplete = tasks
  .filter(task => task.priority === "alta")
  .every(task => !task.completed)
console.log("3. Todas as tarefas de alta prioridade estão incompletas?", allHighPriorityIncomplete)

// 4. Encontrar a posição da tarefa com id = 10 e lidar com caso de não existência
const taskIndex10 = tasks.findIndex(task => task.id === 10)
if (taskIndex10 === -1) {
  console.log("4. Tarefa com id = 10 não encontrada.")
} else {
  console.log("4. Índice da tarefa com id = 10:", taskIndex10)
}
