/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const min = word1.length >= word2.length ? word2 : word1
    const max = min === word1 ? word2 : word1
    
    let res =[]
    let i
    for( i=0; i < min.length; i++){
        res.push(word1[i])
        res.push(word2[i])
    }
    while(i < max.length){
        res.push(max[i])
        i++
    }
    
    return res.join('')
};