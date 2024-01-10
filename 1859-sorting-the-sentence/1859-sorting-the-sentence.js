/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const sArr = s.split(' ')
    let res = Array(sArr.length)
    
    for(const word of sArr){
        for(let i = 0; i < word.length ; i++){
            if(!isNaN(word[i])){
                const newWord = word.slice(0 , i) + word.slice(i+1)
                res[parseInt(word[i]) - 1] = newWord
                break
            }
        }
    }
    return res.join(" ")
};