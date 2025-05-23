const numbers: number[] = [2, 3, 3]

const some = numbers.reduce(function(acumulator, value, position){
    return acumulator + value
})

console.log(some) // 8