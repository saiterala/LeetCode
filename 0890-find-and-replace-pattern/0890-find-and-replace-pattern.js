/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    
    const result = []
    
    for( const word of words){
        if(isMatch(pattern, word)){
            result.push(word)
        }
    }
    
    return result;
    
};

const isMatch = (pattern, word) => {
    const map = {}
    
    for( let i = 0; i < pattern.length; i++){
        if(!(word[i] in map) && !Object.values(map).includes(pattern[i])){
            map[word[i]] = pattern[i]
        }
        else{
            if(map[[word[i]]] !== pattern[i] ){
                return false
            }
        }
    }
    return true
}