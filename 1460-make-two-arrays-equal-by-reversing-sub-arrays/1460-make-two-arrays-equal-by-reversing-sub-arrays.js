/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const tracker = {}
    for (const t of target){
        if(!(t in tracker)) tracker[t] = 0
        tracker[t]++
    }
    for (const a of arr){
        if(!(a in tracker ) || tracker[a] === 0){
            return false
        }
        tracker[a]--
    }
    return true
};