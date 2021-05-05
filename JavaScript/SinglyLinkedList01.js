class SinglyLinkedList {
    constructor(head){
        this.head = head
    }

    lookUp(node){
        let aux = this.head
        while(aux != null){
            if(aux == node){
                return aux
            }
            aux = aux.next
        }
    }

    insertAt(x, nodeIns){ 
        let aux = null
        let posIns = this.head
        let index = 0;
        if(x==0){
            this.prepend(nodeIns)
            return true
        }
        while(posIns.next != null){
            index++
            if(x==index){
                break;
            }
            posIns = posIns.next
        }
        index++
        if(x>index){
            console.log('Error array index out of bounds: '+x)
            return false
        } else {
            aux = posIns.next
            posIns.next = nodeIns
            nodeIns.next = aux
        }
        return true
    }

    removeFrom(x){
        if(x==0){
            this.head = this.head.next
            return true
        }
        let index = 0
        let aux = this.head
        let next = null
        while(aux.next != null){ //(1) AB
            index++
            if(x==index){
                next =  aux.next
                aux.next = next.next
                return true
            }
            aux = aux.next
        }
        console.log('Error array index out of bounds: '+x)
        return false
    }

    isEmpty(){
        return this.head != null
    }

    length(){
        let aux = this.head
        if(aux==null){
            return 0
        }
        let counter = 1
        while(aux.next != null){
            aux = aux.next
            counter ++
        }
        return counter
    }

    append(node){
        let aux = this.head
        while(aux.next != null){
            aux = aux.next
        }
        aux.next = node
    }

    prepend(node){
        node.next = this.head
        this.head = node
    }

    printList(){
        let aux = this.head
        console.log("----------------------")
        while(aux != null){
            console.log(aux.data)
            aux = aux.next
        }
    }
}

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

console.clear()
let node1 = new Node('Iron Man')
let example = new SinglyLinkedList(node1)
let node2 = new Node('Captain America')
node1.next = node2
let node3 = new Node('Incredible Hulk')
let node4 = new Node('Thor')

node2.next = node3
node3.next = node4

let node = example.lookUp(node4)

let node5 = new Node('Coração Satânico')
example.prepend(node5)
let node6 = new Node('Godfather')
example.append(node6)
let node7 = new Node('Kramer x Kramer')
example.prepend(node7)
let node8 = new Node('Upgrade')
example.insertAt(7,node8)
example.printList()
example.removeFrom(0)
example.printList()


