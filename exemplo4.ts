// .sort() - Método .sort() para ordenação de strings

const users = [
  { name: 'João', age: 23 },
  { name: 'Maria', age: 18 },
  { name: 'ana', age: 30 },
  { name: 'rodrigo', age: 17 },
  { name: 'Rodrigo', age: 18 }
];

const order_a_z_list = users.sort((string_a, string_b) => {
    return string_a.name.localeCompare(string_b.name)
})

console.log(order_a_z_list)

const order_z_a_list = users.sort((string_a, string_b) => {
    return string_b.name.localeCompare(string_a.name)
})

console.log(order_z_a_list)