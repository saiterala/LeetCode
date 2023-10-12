/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
    const len = strs.length - 1
    const res = []
    for(let i=0; i< strs[0].length; i++){
        if(strs[0][i] === strs[len][i]){
            res.push(strs[0][i])
        }else break
    }
    
    return res.join("")
};