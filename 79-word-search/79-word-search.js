/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const visited = Array(board.length).fill(0)
    const wordFound = new WordFound(false)
    for (let i =0; i < board.length; i++){
        visited[i] = Array(board[i].length).fill(false)
    }
    for ( let i = 0 ; i < board.length; i++){
        for (let j =0; j < board[i].length; j++){
            if(!wordFound.found){
                explore(board, visited, word, 0, i, j, wordFound)                
            }
        }
    }
    return wordFound.found
};

class WordFound {
    constructor(value){
        this.found = value
    }
}

const explore = (board, visited, word, wordIdx, row, col, wordFound) => {
    if(visited[row][col]) return
    if(board[row][col] !== word[wordIdx]) return
    if(wordIdx === word.length - 1) {
        wordFound.found = true
        return
    }
    visited[row][col] = true
    const neighbours = getNeighbours(board, row, col)
    for( const neighbour of neighbours){
        explore(board, visited, word, wordIdx + 1, neighbour[0], neighbour[1], wordFound)
    }
    visited[row][col] = false
    
} 

const getNeighbours = (board, row , col) => {
    const result = []
    if(row < board.length - 1) result.push([row + 1, col])
    if(row > 0) result.push([row - 1, col])
    if(col < board[row].length) result.push([row, col + 1])
    if(col > 0) result.push([row, col - 1] )
    return result
}