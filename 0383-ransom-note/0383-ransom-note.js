/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = {}
    
    for ( const char of magazine){
        map[char] = (map[char] || 0 ) + 1
    }
    
    for(const char of ransomNote){
        if(!map[char] || map[char] === 0){
            return false
        }
        map[char] = map[char] - 1
    }
    return true
};