ohashiQueue = () => {
    const queue = []
    return {
        add(x) {
            queue.unshift(x)
            return x
        },
        remove(){
            return queue.pop()            
        },
        next(){
            return queue[queue.length-1]
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
console.log('Inserindo os elementos na Queue')
console.log('INPUT: '+marvelMovies.add('Iron Man'))
console.log('INPUT: '+marvelMovies.add('Captain America'))
console.log('INPUT: '+marvelMovies.add('Incredible Hulk'))
console.log('Removendo os elementos da Queue')
console.log('OUTPUT: '+marvelMovies.remove())
console.log('OUTPUT: '+marvelMovies.remove())
console.log('OUTPUT: '+marvelMovies.remove())