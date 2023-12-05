/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let ans = 0
    let bal = 0
    for(let i = 0; i < s.length; i++){
        s[i] === "(" ? bal++ : bal--
        if(bal === -1){
            ans++
            bal = 0
        }
    }
    ans += bal
    return ans
};