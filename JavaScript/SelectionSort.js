selectionSort = (qtdElementos) => {
    const ar = []
    return {
        load(){
            for(i=0;i<qtdElementos;i++){
                ar.push(parseInt(Math.random()*qtdElementos,10))
            }
            return ar
        },
        sort(){
            for(i=0;i<qtdElementos;i++){
                minor = qtdElementos+1
                indexMinor = -1
                for(j=i;j<qtdElementos;j++){
                    if(ar[j]<minor){
                        minor = ar[j]
                        indexMinor = j
                    }
                }
                let aux = ar[i]
                ar[i] = minor
                ar[indexMinor] = aux
            }
            return ar
        }
    }
}

let selSort = selectionSort(100)
console.log(selSort.load())
console.log(selSort.sort())