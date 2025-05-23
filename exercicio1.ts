// Dado o array de usuários abaixo, faça a ordenação dos resultados de forma crescente, 
// segundo a idade de cada usuário. Após a ordenação crescente, faça a ordenação decrescente

const users = [
  { name: 'João', age: 23 },
  { name: 'Maria', age: 18 },
  { name: 'ana', age: 30 },
  { name: 'rodrigo', age: 17 },
  { name: 'Rodrigo', age: 18 }
];

const ascending_list = users.sort(function(element1, element2) {
  return element1.age - element2.age
})

console.log(ascending_list)


const descending_list = users.sort(function(element1, element2) {
  return element2.age - element1.age
})

console.log(descending_list)