/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    const len = s.length
    const adjPair = {}
    const visited = Array(len).fill(false)
    const result = Array(len)
    
    for ( let i =0; i < len; i++){
        adjPair[i] = new Array()
    }
    
    for (let i =0 ; i< pairs.length; i++){
        const [edge, vertex] = pairs[i]
        adjPair[edge] = [... adjPair[edge], vertex]
        adjPair[vertex] = [...adjPair[vertex], edge]
    }
    let visted = Array(len).fill(false)
    
    for(let i = 0 ; i < len; i++){
        if(!visited[i]){
            let chars = []
            let indices = []
            dfsUtil(i, chars, indices, visited, s, adjPair)
            indices.sort((a,b) => a-b)
            chars.sort((a,b) => a.charCodeAt() - b.charCodeAt())
            for(let j =0 ; j < indices.length; j++){
                result[indices[j]] = chars[j]
            }
        }
    }
    
    return result.join('')
};

const dfsUtil = (idx, chars, indices, visited,s, adjPairs) => {
    visited[idx] = true
    chars.push(s[idx])
    indices.push(idx)
    
    for(const i of adjPairs[idx]){
        if(!visited[i]){
            dfsUtil(i, chars, indices, visited, s, adjPairs)
        }
    }
    
}