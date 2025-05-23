// sort() - Ordena um array de acordo com com a tabela Unicode

const numbers: number[] = [1, 220, 43, 21, 84]


// Porém se incluir a função com a ordenação crescente, ficaria assim;
const ascending_order = numbers.sort((element1, element2) => {
    if (element1 < element2) {
        return -1
    } else if (element1 == element2){
        return 0
    } else{
        return 1
    }
})



console.log()