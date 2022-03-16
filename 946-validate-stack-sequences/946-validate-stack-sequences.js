/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let j = 0
    let stack = []
    
    for (const x of pushed){
        stack.push(x)
        while(stack.length && stack[stack.length - 1] === popped[j] && j < popped.length){
            stack.pop()
            j += 1
        }
    }

    return j === popped.length
    
};