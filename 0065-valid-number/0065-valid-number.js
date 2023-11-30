/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let seenDigit = false
    let seenExponent = false
    let seenDot = false
    
    for( let i =0;i < s.length; i++){
        const char = s[i]
        
        if(digits.includes(char)){
            seenDigit = true 
        }
        else if(char === "+" || char === "-"){
            if(i > 0 && s[i-1] !== "e" && s[i-1] !=="E"){
                return false
            }
        }else if(char === "e" || char === "E"){
            if(seenExponent || !seenDigit){
                return false
            }
            seenExponent = true
            seenDigit = false
        }else if(char === "."){
            if(seenDot || seenExponent){
                return false
            }
            seenDot = true
        }else return false
    }
    
    return seenDigit
};