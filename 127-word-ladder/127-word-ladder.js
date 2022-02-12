/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const set = new Set(wordList)
    if (!set.has(endWord)) return 0
    const visited = new Set()
    const queue = []
    queue.push(beginWord)
    visited.add(beginWord)
    let changes = 1
    
    while(queue.length){
        const length = queue.length
        for (let i=0; i< length; i++){
            const word = queue.shift()
            if(word === endWord) return changes
            for (let k =0; k < word.length; k++){
                for (let j =97; j<= 122; j++){
                    const char = String.fromCharCode(j)
                    let newWord = Array.from(word)
                    newWord[k] = char
                    newWord = newWord.join('')
                    if(set.has(newWord) && !visited.has(newWord)){
                        queue.push(newWord)
                        visited.add(newWord)
                    }
                }
            }
            
        }
        changes++
    }
    return 0
};