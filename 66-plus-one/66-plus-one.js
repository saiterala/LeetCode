/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const string = digits.join('')
    let num = BigInt(string)
    num++
    
    return num.toString().split('')
};