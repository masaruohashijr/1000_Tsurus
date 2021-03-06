const ohashiQueue = () => {
    const queue = []
    return {
        add(x){
            queue.push(x) // insere na TAIL
            return x
        },
        remove(){
            return queue.shift() //  remove do HEAD
        },
        next(){
            return queue[0] // pega no início
        },
        length(){
            return queue.length
        },
        empty(){
            return queue.length == 0?true:false
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