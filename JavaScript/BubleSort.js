BubbleSort = (qtdElements) => {

    const conjunto = new Set()
    const arrayNElementos = []
    return {
        load() {
            for (i = 0; conjunto.length<qtdElements; i++) {
                let sorteado = parseInt(Math.random() * qtdElements)
                if(!conjunto.has(sorteado)){
                    conjunto.push(sorteado)
                }
            }
            return conjunto.values
        },
        sort() {
            let sorted = false
            while (!sorted) {
                sorted = true
                for (i = 0; i < qtdElements; i++) {
                    let varAux = i
                    if (arrayNElementos[i] > arrayNElementos[i + 1]) {
                        varAux = arrayNElementos[i + 1]
                        arrayNElementos[i + 1] = arrayNElementos[i]
                        arrayNElementos[i] = varAux
                        sorted = false
                    }
                }
            }
            return arrayNElementos
        }
    }
}
const bubbleSort = BubbleSort(100)
console.log(bubbleSort.load())
console.log(bubbleSort.sort())