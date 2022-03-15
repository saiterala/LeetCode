/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = []
    
    const arr = Array.from(s)
    for ( let i = 0; i < arr.length; i++ ){
        const char = arr[i]
        if(char === '(') stack.push(i)
        
        if(char === ')'){
            if(stack.length) stack.pop()
            else arr[i] = ''
        }
    }

    while(stack.length){
        arr[stack.pop()] = ''
    }
    
    return arr.join('')
};