/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []
    for(const char of s){

        if(stack[stack.length - 1] === char){
            stack.pop()
            wasUpdated = true
        }else{
            stack.push(char)
        }

    }
    
    return stack.join("")
};