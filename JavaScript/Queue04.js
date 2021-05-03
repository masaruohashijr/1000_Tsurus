class Queue {
    constructor(){
        this.items = []    
    }
    add(x){
        this.items.push(x) // insere da TAIL
        return x
    }
    remove(){
        return this.items.shift() //  remove da HEAD
    }
    next(){        
        return this.items[0]
    }
    length(){
        return this.items.length
    }
    empty(){
        return this.items.length==0?true:false
    }
}

const marvelMovies = new Queue()
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