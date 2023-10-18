/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    let count = 0
    const map = new Map()
    const cmap = {}
    for(const word of words){
        const rev = word.split("").reverse().join("")
        if(map.has(rev)){
            count = count + 2
            if(map.get(rev) === 1){
                map.delete(rev)    
            }else {
                map.set(rev, map.get(rev) - 1)
            } 
        }else if(word === rev){
            cmap[word] = (cmap[word] || 0) + 1
        }
        else{
            map.set(word, (map.get(word) || 0) + 1)
        }
    }
  
    let central = false
    Object.values(cmap).forEach( val => {
        if(val >= 2){
            count= count + (Math.floor(val/2) * 2)
        }
        if(val % 2 === 1){
            central = true
        }
    })
    
    if(central) count++
    return count * 2
};