class Queue {
    constructor() {
        this.items = [];
    }

    // add element to the queue
    enqueue(element) {
        this.items.push(element);
        return element;
    }

    // remove element from the queue
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }

    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }

    // check if the queue is empty
    isEmpty(){
    return this.items.length == 0;
    }

    length(){
        return this.items.length;
    }
}

const marvelMovies = new Queue()
console.log('Inserindo os elementos na Queue')
console.log('INPUT: '+marvelMovies.enqueue('Iron Man'))
console.log('INPUT: '+marvelMovies.enqueue('Captain America'))
console.log('INPUT: '+marvelMovies.enqueue('Incredible Hulk'))
console.log('LENGTH: '+marvelMovies.length())
console.log('Removendo os elementos da Queue')
console.log('NEXT: '+marvelMovies.peek())
console.log('OUTPUT: '+marvelMovies.dequeue())
console.log('LENGTH: '+marvelMovies.length())
console.log('NEXT: '+marvelMovies.peek())
console.log('OUTPUT: '+marvelMovies.dequeue())
console.log('LENGTH: '+marvelMovies.length())
console.log('NEXT: '+marvelMovies.peek())
console.log('OUTPUT: '+marvelMovies.dequeue())
console.log('LENGTH: '+marvelMovies.length())
console.log('NEXT: '+marvelMovies.peek())
console.log('Está vazio? '+marvelMovies.isEmpty())