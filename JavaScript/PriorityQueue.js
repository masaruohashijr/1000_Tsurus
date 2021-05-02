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

priorityQueue = ()=>{
    const highPriority = ohashiQueue()
    const lowPriority = ohashiQueue()
    return {
    add(x, high = false) {
        high ? highPriority.add(x) : lowPriority.add(x)
        return x      },
    remove() {
        if (!highPriority.empty()) {
          return highPriority.remove()
        }
        return lowPriority.remove()
      },
    next() {
        if (!highPriority.empty()) {
          return highPriority.next()
        }
        return lowPriority.next()
      },
    length() {
        return (
          highPriority.length + lowPriority.length
        )
      },
      empty() {
        return (
          highPriority.empty() && lowPriority.empty()
        )
      }
    }
}

const tasks = priorityQueue()
console.log("Inserindo os elementos")
console.log(tasks.add('Learn React', false))
console.log(tasks.add('Learn JavaScript', true))
console.log(tasks.add('Learn Vue', false))
console.log(tasks.add('Learn Java', false))
console.log(tasks.add('Learn Go', true))
console.log(tasks.add('Learn Clojure', false))
console.log(tasks.add('Learn C', true))
console.log("***********************")
console.log("Removendo os elementos")
console.log(tasks.remove())
console.log(tasks.remove())
console.log(tasks.remove())
