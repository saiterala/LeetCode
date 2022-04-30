/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    let max = 0
    let min = 0
    const row = heights.length
    const col = heights[0].length
    
    for(let i =0; i < row; i++){
        for(let j =0; j < col; j++){
            if(heights[i-1]){
                max = Math.max(max, Math.abs(heights[i][j] - heights[i-1][j]))
            }
            if(heights[i][j-1]){
                max = Math.max(max, Math.abs(heights[i][j] - heights[i][j-1]))
            }
        }
    }
    let visited = new Set()
    
    while( min < max - 1){
        let mid = Math.floor((min + max) / 2)
        visited = new Set()
        
        if(dfsUtil(0, 0, visited, col, row, dirs, mid, heights)){
            max= mid
        }else {
            min = mid
        }
    }
    
    return dfsUtil(0, 0, visited, col, row, dirs, min, heights) ? min: max
};

const dfsUtil = (i, j, visited, col, row, dirs, k, heights) => {
    
    if(i === row-1 && j === col - 1) return true
    visited.add(`${i}-${j}`)
    
    for ( const dir of dirs ){
        const x = dir[0] + i
        const y = dir[1] + j
        
        if(visited.has(`${x}-${y}`)) continue
        if(x < 0 || x >= row || y < 0 || y >= col) continue
       
        if(Math.abs(heights[i][j] - heights[x][y]) > k) continue
        
        if(dfsUtil(x, y, visited, col, row, dirs, k, heights)) return true
    }
    return false
}