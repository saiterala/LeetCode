/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelsMap = {}
    let result = 0
    for(const j of jewels){
        jewelsMap[j] = true
    }
    
    for (const s of stones){
        if(s in jewelsMap) result += 1
    }
    
    return result
    
};