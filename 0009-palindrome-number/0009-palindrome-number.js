/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = x.toString().split("")
    console.log(arr)
    let i =0
    let j = arr.length -1
    while(i < j){
        if(arr[i] === arr[j]){
            i++
            j--
        }else return false
    }
    return true
};