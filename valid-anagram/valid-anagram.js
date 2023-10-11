/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const map = {}
    
    for (const char of s){
        map[char] = (map[char] || 0) + 1
    }
    
    for(const char of t){
        if(!(char in map) || map[char] === 0 ) return false
        
        map[char]--
    }
    
    return true

};