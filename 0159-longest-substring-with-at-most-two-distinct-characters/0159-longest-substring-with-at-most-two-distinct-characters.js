/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    const map = new Map()
    let max = 0
    const len = s.length
    let left = 0
    let right = 0

    while( right <  len){
        const val = s[right]
        map.set(val, right)

        if( map.size === 3){
            const min = Math.min(...map.values())
            map.delete(s[min])
            left = min + 1
        }
        max = Math.max( max, right -left + 1)
        right++
    }
    return max
};