/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let ans =0
  for(let i =0; i < s.length; i++){
      ans += getNoOfPalindrome(s, i, i)
      ans += getNoOfPalindrome(s, i , i+1)
  }
    
    return ans
    
};

const getNoOfPalindrome = (s, i, j) => {
    let ans = 0
    while( i >=0 && j <s.length){
        if(s[i] !== s[j]){
            break
        }
        i--
        j++
        ans++
    }
    return ans
}