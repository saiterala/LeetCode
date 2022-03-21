/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let start = 0
    let end = s.length - 1
    
    while(start < end){
        if(s[start] !== s[end]){
            return checkPlaindrome(s, start+1, end) || checkPlaindrome(s, start, end-1)
        }
        else {
            start++
            end--
        }
    }
    return true
};

const checkPlaindrome = (string, start, end) => {
    while(start < end){
        if(string[start] !== string[end]) return false
        else{
            start++
            end--
        }
    }
    return true
}