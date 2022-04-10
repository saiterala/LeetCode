/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let resultStack = []
    
    for (const str of ops){
        const x = parseInt(str)
        let length = resultStack.length
        if(str === '+'){
            resultStack.push(resultStack[length -1 ] + resultStack[length - 2])
        }else if( str === 'D'){
            resultStack.push(2 * resultStack[length - 1])
        }else if(str === 'C') resultStack.pop()
        else resultStack.push(x)
    }
    return resultStack.reduce((a,b) => a + b)
    
};