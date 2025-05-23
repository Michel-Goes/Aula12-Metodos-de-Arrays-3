// sort() - simplificando a ordenação

const numbers: number[] = [1, 220, 43, 21, 84]

const ascending_order = numbers.sort(function(item1, item2){
    return item1 - item2
})

console.log(ascending_order)

const descending_order = numbers.sort(function(element1, element2) {
    return element2 - element1
})

console.log(descending_order)