ohashiQueue = () => {
    const queue = []
    return {
        add(x) {
            queue.unshift(x) // insere no HEAD
            return x
        },
        remove(){
            return queue.pop() // remove da TAIL           
        },
        next(){
            return queue[queue.length-1] // pega no final do array
        },
        length(){
            return queue.length
        },
        empty(){
            return queue.length === 0
        }
    }
}

const marvelMovies = ohashiQueue()
console.log('FIFO => Inserindo os elementos na Queue')
console.log('INPUT: '+marvelMovies.add('Iron Man'))
console.log('INPUT: '+marvelMovies.add('Captain America'))
console.log('INPUT: '+marvelMovies.add('Incredible Hulk'))
console.log('LENGTH: '+marvelMovies.length())
console.log('FIFO => Removendo os elementos da Queue')
console.log('OUTPUT: '+marvelMovies.remove())
console.log('NEXT: '+marvelMovies.next())
console.log('LENGTH: '+marvelMovies.length())
console.log('OUTPUT: '+marvelMovies.remove())
console.log('NEXT: '+marvelMovies.next())
console.log('LENGTH: '+marvelMovies.length())
console.log('OUTPUT: '+marvelMovies.remove())
console.log('NEXT: '+marvelMovies.next())
console.log('LENGTH: '+marvelMovies.length())
console.log('Está vazio? '+marvelMovies.empty())