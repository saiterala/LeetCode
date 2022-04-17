/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if(s.length === 1) return s
    s = s.trim()
    
    let stack = []
    let currNum = 0
    let operator = '+'
        
    for(let i = 0; i < s.length; i++){
        const char = s[i]
        if(char === ' ') continue
        if(!isNaN(char)){
            currNum = currNum * 10 + parseInt(char)
        }
        if(isNaN(char) || (i === s.length - 1)) {

            if(operator === '*'){
                stack.push(stack.pop() * currNum)
            }
            if(operator === '/'){
                stack.push(parseInt(stack.pop() / currNum))
            }
            if(operator === '+'){
                stack.push(currNum)
            }
            if(operator === '-'){
                stack.push(currNum * -1)
            }
            operator = char
            currNum = 0
            
        }
    }
    let result = 0
    
    while(stack.length){
        result += stack.pop()
    }
    return result
    
};