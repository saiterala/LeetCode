/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const stringArr = s.split(" ")
    if(pattern.length !== stringArr.length ) return false
    
    const map = {}
    
    for ( let i = 0; i < pattern.length; i ++){
        const char = `char_${pattern[i]}`
        const word = `word_${stringArr[i]}`
        
        if(!(char in map)){
            map[char] = i
        }
        if(!(word in map)){
            map[word] = i
        }
        
        if(map[char] !== map[word]) return false
        
    }
    
    
    return true
};