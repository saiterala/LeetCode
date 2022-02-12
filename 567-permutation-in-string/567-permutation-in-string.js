/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false
    const map = {}
    for (const char of s1){
        map[char] = (map[char] || 0) + 1
    }
   
    let left = 0
    let right = 0
    let matches = 0
    const matchesLength = Object.keys(map).length
    
    while (right < s2.length){
        const rightValue = s2[right]
        if(rightValue in map){
            map[rightValue]--
        }
        if(map[rightValue] === 0) matches++

        if(matches === matchesLength) return true
        
        if(right - left === s1.length -1){
            const leftVal = s2[left]
            if(map[leftVal] === 0 ) matches--
            if(leftVal in map){
                map[leftVal]++
            }
            left++
        }
        right++
    }
    return false
};