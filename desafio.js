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
