/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const reverse = Array.from(s).reverse().join('')
    
    const lengthArr =  Array(s.length + 1).fill(0).map(row => Array(s.length + 1).fill(0))  
    
    for (let i = 1; i < s.length + 1; i++){
        for (let j = 1 ; j < reverse.length + 1; j++){
            if(s[i - 1] === reverse[j - 1]) lengthArr[i][j] = lengthArr[i-1][j-1] + 1
            else lengthArr[i][j] = Math.max(lengthArr[i-1][j], lengthArr[i][j-1])
        }
    }
   
   return lengthArr[s.length][s.length]
};