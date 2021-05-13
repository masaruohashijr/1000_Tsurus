QuickSort = (qtdElementos) => {
    const ar = []
    return {
        load(){
            while(ar.length<qtdElementos){
                let randon = parseInt(Math.random()*qtdElementos,10)
                if(!ar.includes(randon)){
                    ar.push(randon)
                }
            }
            return ar
        },
        swap(i, j){
            console.log('swap entre ['+i+'] = '+ar[i]+' e ['+j+'] = '+ar[j])
            let temp = ar[i];
            ar[i] = ar[j];
            ar[j] = temp;
            console.log(ar)
        },
        partition(low, high){
            let pivot = ar[high]
            console.log('pivot eh ar['+high+'] = '+pivot)
            let i = low -  1
            for(j = low; j <= high - 1; j++){
                console.log('j eh '+j+' e ar['+j+'] = '+ar[j])                
                if (ar[j] < pivot) {
                    i++
                    this.swap(i, j)
                }
            }
            this.swap(i + 1, high)
            return (i + 1)
        },
        sort(low, high){
            if (low < high){
                let pi = this.partition(low, high)
                this.sort(low, pi - 1)
                this.sort(pi + 1, high)
            }
            return ar
        }
    }
}
qtd = 4
const quickSort = QuickSort(qtd)
console.log(quickSort.load())
console.log(quickSort.sort(0,qtd-1))