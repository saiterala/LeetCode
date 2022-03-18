/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const lastSeen = {}
    const lastIndex = {}
    const stack =[]
    
    for ( let i =0; i < s.length; i++){
        lastIndex[s[i]] = i
    }
    
    for ( let i =0; i < s.length ; i++){
        const char = s[i]
        if(lastSeen[char]) continue
        while(stack.length && stack[stack.length - 1] > char && i < lastIndex[stack[stack.length - 1]]){
            const value = stack.pop()
            lastSeen[value] = false
        }
        stack.push(s[i])
        lastSeen[s[i]] = true
    }
    return stack.join('')
};