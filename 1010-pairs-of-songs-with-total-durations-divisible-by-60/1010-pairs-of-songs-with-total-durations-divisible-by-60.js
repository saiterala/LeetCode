/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    const map = {}
    let count = 0
    
    for (const t of time){
        const mod = t % 60
        const left  = (60 - mod ) % 60
        if(left in map) count += map[left]
        
        map[mod] = map[mod] ? map[mod] + 1 : 1
    }
    
    return count
};