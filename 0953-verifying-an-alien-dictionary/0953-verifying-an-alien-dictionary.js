/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const map = {}
    for(let i=0; i < order.length; i++ ){
        map[order[i]] = i
    }
    console.log(map)
    for(let i =0; i < words.length -1; i++){
        for(let j=0; j < words[i].length; j++){
            if(j >= words[i +1].length) return false
            if(map[words[i][j]] > map[words[i+1][j]]) return false
            if(map[words[i][j]] < map[words[i+1][j]]) break
        }
    }
    
    return true;
};