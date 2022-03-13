/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const openParen = ['(', '{', '[']
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let stack = []
    
    for (const char of s){
        if ( openParen.includes(char)){
            stack.push(char)
        }
        else {
            const op = stack.pop()
            if(map[char] !== op) return false
        }
    }
    return stack.length ? false: true
};