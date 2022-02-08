/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const m = s.length
  const n = p.length
  const result = []
  
  if(n > m) return result
  const pArr = Array(26).fill(0)
  const sArr = Array(26).fill(0)
  
  
  for(let i = 0; i < n ; i++){
      pArr[p[i].charCodeAt() - 'a'.charCodeAt()]++
  }
    let startIdx = 0
    let endIdx = startIdx + p.length -1
    for ( let i = startIdx; i <= endIdx; i++){
            sArr[s[i].charCodeAt() - 'a'.charCodeAt()]++
    }
   
    while (startIdx < s.length && endIdx < s.length){
        if(isEqual(sArr, pArr)){
            result.push(startIdx)
        }
        sArr[s[startIdx].charCodeAt() - 'a'.charCodeAt()]--
        startIdx++
        endIdx++
        endIdx < s.length  && sArr[s[endIdx].charCodeAt() - 'a'.charCodeAt()]++
    }
    
    return result
};


const isEqual = (sArr, pArr) => {
    for(let i =0 ; i < 26; i++){
        if(sArr[i] !== pArr[i]){
            return false     
        }
    }
    return true
}