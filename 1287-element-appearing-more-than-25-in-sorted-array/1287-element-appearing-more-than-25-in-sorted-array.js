/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const max = Math.floor(arr.length / 4)
    console.log(max)
    
    const map = {}
    for (const char of arr){
        map[char] = (map[char] || 0) + 1
        if(map[char] > max) return char
    }
    return -1
};