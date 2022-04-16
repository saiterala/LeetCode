/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    licensePlate = licensePlate.toLowerCase()
    const arr = licensePlate.split('').filter(c => c >= 'a' && c <= 'z')
    
    const map = {}
   
    for (const c of arr){
        map[c] = map[c] ? map[c] + 1 : 1
    }
    
    const unique = Object.keys(map).length
    
    let minimumLength = Infinity 
    let minimumWord = ''
    
    for( const word of words){
        if(isCompletingWord(map, unique, word)){
            console.log(word)
            if(word.length < minimumLength){
                minimumLength = word.length
                minimumWord = word
            }
        }
    }
    return minimumWord
};

const isCompletingWord = (map, unique,word)  => {
    let newMap = {}
    let newUnique = 0
    for(const c of word.split('')){
        if(c in map ){
            newMap[c] = newMap[c] ? newMap[c] + 1 : 1
            if(newMap[c] === map[c]) newUnique++
            if(unique === newUnique) return true
        }
    }
    return false
}