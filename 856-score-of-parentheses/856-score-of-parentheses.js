/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = [0]
   
    for(const char of s){
       if( char ==='(') stack.push(0)
        else{
            const v = stack.pop()
            stack[stack.length - 1] += Math.max(v * 2 , 1) 
        }
    }
    return stack.pop()
};