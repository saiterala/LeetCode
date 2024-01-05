/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    const map = {}
    
    for(const char of s){
        map[char] = (map[char] || 0) + 1
    }
    
    let odd = 0
    for(const val of Object.values(map)){
        const rem = val % 2
        if(rem > 0) odd++
        if(odd > 1) return false
    }
    return true
};