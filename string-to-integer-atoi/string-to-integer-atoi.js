/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    
    s= s.trim().toLowerCase()
    const res= []
    let multiplier = 1
    
    for(i = 0 ; i < s.length ; i++){
        if(i === 0){
             if(s[i] === "-"){
                multiplier = -1
                continue;
            }
            if(s[i] === "+"){
                continue;
            }
        }
         const val = parseInt(s[i])
         if(val >= 0 && val <= 9){
            console.log("valid ", s[i])
            res.push(s[i])
        } else break;
    }
    
    if(!res.length) return 0
    let val = parseInt(res.join("")) * multiplier
    if( val > (Math.pow(2, 31) - 1)) return Math.pow(2, 31) -1
    if( val < -Math.pow(2, 31)) return -Math.pow(2, 31)
    return val
};