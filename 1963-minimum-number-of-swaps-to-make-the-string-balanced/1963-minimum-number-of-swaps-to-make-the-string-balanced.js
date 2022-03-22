/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let openBracket = 0
    let closingBracket = 0
    
    for (const char of s){
        if(char === '[') openBracket ++
        else{
            if(openBracket > 0) openBracket--
            else closingBracket++
        }
    }
    
    const totalRemPairs = (closingBracket + openBracket)/2
    return Math.ceil(totalRemPairs/ 2)
    
};