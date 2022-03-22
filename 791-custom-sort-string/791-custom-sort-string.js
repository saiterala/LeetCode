/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const map = {}
    for (const char of s){
        map[char] = (map[char] || 0 ) + 1 
    }
    
    const result = []
    
    for (const char of order){
        if(char in map){
            while(map[char] > 0){
                result.push(char)
                map[char]--
            }
        }
    }
    
    for (const key in map){
        while(map[key] > 0){
            result.push(key)
            map[key]--
        }
    }
    
    return result.join('')
};