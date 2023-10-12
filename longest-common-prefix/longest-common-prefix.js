/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
    const len = strs.length - 1
    console.log(strs)
    const res = []
    for(let i=0; i< strs[0].length; i++){
        if(strs[0][i] === strs[len][i]){
            console.log("in here", strs[0][i])
            res.push(strs[0][i])
        }else break
    }
    
    return res.join("")
};