/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function(s, k) {
     let memo = Array(s.length).fill(null).map( val =>                Array(s.length).fill(null) )

  const checkPalindrome = (p1, p2) => {
    if(memo[p1][p2] !== null) return memo[p1][p2]

    let mistakes = 0
    if(p1 === p2) mistakes = 0
    else if (p2 - p1 === 1) mistakes = s[p1] === s[p2] ? 0 : 1
    else if(s[p1] === s[p2]) mistakes = checkPalindrome(p1+1, p2-1)
    else mistakes = 1 + Math.min(checkPalindrome(p1+1, p2), checkPalindrome(p1, p2-1))
    
    memo[p1][p2] = mistakes
    return mistakes
  }

  return checkPalindrome(0, s.length-1) <= k
};