/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const sArr = s.split(' ')
    const ans = []
    
    const reverse = (word) => {
        const wordArr = word.split('')
        let i = 0
        let j = wordArr.length -1
        
        while(i < j){
            const temp = wordArr[i]
            wordArr[i] = wordArr[j]
            wordArr[j] = temp
            i++
            j--
        }
        return wordArr.join('')
    }
    
    for(const word of sArr){
        ans.push(reverse(word))
    }
    
    return ans.join(" ")
};