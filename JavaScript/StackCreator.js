StackCreator = () => {
    const stack = []
    return {
        push(x) {
            stack.push(x)
            return x
          },
        pop() {
            return stack.pop()
        },
        next() {
            return stack[stack.length - 1]
         },
        length() {
            return stack.length
           },
        empty() {
             return stack.length == 0
        }
    }
}

const stackCreator = StackCreator()

console.log(stackCreator.push('Iron Man'))
console.log(stackCreator.push('Captain America'))
console.log(stackCreator.push('Incredible Hulk'))
console.log(stackCreator.push('Thor'))
console.log(stackCreator.length())
console.log(stackCreator.pop())
console.log(stackCreator.pop())
console.log(stackCreator.pop())
console.log(stackCreator.pop())


