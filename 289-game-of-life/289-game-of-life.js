/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length - 1
    const n = board[0].length - 1
    
    for (let i = 0; i <= m; i++){
        for (let j = 0; j <=n; j++){
            let value = board[i][j]
            let neighbors = getNeighbors(i, j, m, n, board)
            let newState = getDeadOrAlive(value,neighbors)
            let newValue =  getNewStateValue(value, newState)
          
            board[i][j] = newValue
        }
    }
    
   for (let i = 0; i <= m; i++){
        for (let j = 0; j <=n; j++){
            if(board[i][j] === 3) board[i][j] = 1
            else if(board[i][j] === 4) board[i][j] = 0
        }
    }
    return board
    
};

const getNeighbors = (i, j, m, n, board) => {
    const neighbors = []
    if(i > 0) {
        neighbors.push(board[i-1][j])
        if(j > 0) neighbors.push(board[i-1][j - 1])
        if(j < n) neighbors.push(board[i-1][j + 1])
    }
    if (i < m){
        neighbors.push(board[i+1][j])
        if(j > 0) neighbors.push(board[i+1][j - 1])
        if(j < n) neighbors.push(board[i+1][j + 1])
    } 
    if(j > 0) neighbors.push(board[i][j - 1])
    if( j < n) neighbors.push(board[i][j + 1])
    return neighbors
}

const getDeadOrAlive = (curr, neighbors) => {
    let live = 0
    for (const n of neighbors){
        if( n === 1 || n=== 4) live++
    }
    
   if(curr === 1){
       if(live < 2) return false
       if(live > 3) return false
       return true
   }else{
       if(live === 3) return true
       return false
   }
}

const getNewStateValue = (curr,newState) => {
    if (curr === 0 && !newState) return curr
    if(curr === 0 && newState)  return 3
    if(curr === 1 && newState) return curr
    if(curr === 1 && !newState) return 4   
}