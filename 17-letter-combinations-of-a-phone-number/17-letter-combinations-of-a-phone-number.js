/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const result = []
    if(!digits.length) return result
    const curr = Array(digits.length).fill(0)
    helper(0, digits, curr, result)
    return result
};

const helper = (idx, digits, curr, result) => {
    if(idx === digits.length){
        result.push(curr.join(''))
    }else{
        const digitArr = DIGIT_LETTERS[digits[idx]]
        for (const digit of digitArr){
            curr[idx]= digit
            helper(idx+1, digits, curr, result)
        }
    }
}
const DIGIT_LETTERS = {
	2: ['a', 'b', 'c'],
	3: ['d','e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m','n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z'],
}