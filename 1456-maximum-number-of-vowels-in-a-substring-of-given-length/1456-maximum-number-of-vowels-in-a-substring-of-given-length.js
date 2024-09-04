/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const set = new Set("aeiou")
    let count = 0
    let res = 0
    
    for(let i = 0 ; i < k ; i++){
        if(set.has(s[i])) count++
    }
    res = count
    
    for(let i =k; i < s.length; i++){
        if(set.has(s[i])) count++
        if(set.has(s[i - k])) count--
        
        res = Math.max(res, count)
    }
    
    return res;
};