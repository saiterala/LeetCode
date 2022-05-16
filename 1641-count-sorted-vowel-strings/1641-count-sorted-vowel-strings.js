/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const result = [0]
    helper(0,n, [], result, "aeiou")

    return result[0]
};

const helper = (start, n, temp, result, str) => {
    if(temp.length === n){
        result[0]++
        return
    }
    for (let i = start; i < str.length; i++){
        temp.push(str[i])
        helper(i, n, temp, result, str)
        temp.pop()
    }
}