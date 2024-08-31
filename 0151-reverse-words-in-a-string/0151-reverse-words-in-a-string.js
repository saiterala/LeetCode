/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const str = s.trim()
    let strIdx = 0
    const result = []
    for(let i = 0; i < s.length; i++){
        if(str[i] === " "){
            if(str[i - 1] !== " ") result.push(str.slice(strIdx, i))
            strIdx = i
        }else if(str[strIdx] === " "){
            result.push(" ");
            strIdx = i
        }
    }
    result.push(str.slice(strIdx))
    return reverse(result).join("");
    
};

const reverse = (strArr) => {
    let left = 0
    let right = strArr.length -1
    while(left < right){
        const temp = strArr[left]
        strArr[left] = strArr[right]
        strArr[right] = temp
        left++;
        right--;
    }
    return strArr;
}