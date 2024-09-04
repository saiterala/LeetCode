/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length === 0) return true
    
    let strIdx = 0
    
    for(let i =0; i < t.length; i++){
        if(t[i] === s[strIdx]) strIdx++
        
        if(strIdx === s.length) return true 
    }
    
    return false
    
};