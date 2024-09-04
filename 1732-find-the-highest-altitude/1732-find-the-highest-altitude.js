/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let result = 0;
    let curr = 0
    
    for(const alt of gain){
        curr += alt
        result = Math.max(result, curr)
    }
    
    return result
    
};