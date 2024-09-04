/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {}
    
    for(const num of arr ){
        map[num] = (map[num] || 0 ) + 1
    }
    
    const set = new Set();
    for(const num of Object.values(map)){
        set.add(num)
    }
    
  
    return set.size === Object.keys(map).length
};