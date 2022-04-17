/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const string = digits.join('')
    console.log(BigInt(string))
    let num = BigInt(string)
    num++
    console.log(num)
    
    return num.toString().split('')
};