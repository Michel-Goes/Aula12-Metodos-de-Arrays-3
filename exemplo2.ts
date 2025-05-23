// Podemos também inverter os parâmetros para retornar a ordem decrescente

const numbers: number[] = [1, 220, 43, 21, 84]

const descending_order = numbers.sort((element1, element2) => {
    if (element1 > element2) {
        return -1
    } else if (element1 == element2){
        return 0
    } else{
        return 1
    }
})

console.log(descending_order)