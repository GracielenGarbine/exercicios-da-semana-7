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
