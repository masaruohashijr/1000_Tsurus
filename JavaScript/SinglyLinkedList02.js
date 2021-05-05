class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    add(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    remove(val){
        if(!this.tail){
            return false;
        }
        const removed = this.tail
        if(this.head != this.tail)
    }
}

let example = new SinglyLinkedList()

let node1 = new Node('Iron Man')
let node2 = new Node('Captain America')
let node3 = new Node('Incredible Hulk')
let node4 = new Node('Thor')

example.head = node1
node1.next = node2
node2.next = node3
node3.next = node4

let node = example.lookUp(node4)
//console.log(node.data)

let node5 = new Node('Coração Satânico')
node = example.prepend(node5)
let node6 = new Node('Godfather')
node = example.append(node6)

example.printList()

let node7 = new Node('Kramer x Kramer')
node = example.prepend(node7)

example.printList()


