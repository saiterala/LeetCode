/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    
    const row = grid.length
    const col = grid[0].length
    let arr = []
    for(let i =0 ; i < row; i++){
        for (let j =0; j < col; j++){
            arr.push(grid[i][j])
        }
    }
    
    let index = k % arr.length === 0 ? 0 : arr.length - k % arr.length
    
    if(index === 0) return grid
    
    for(let i =0; i < row; i++){
        for (let j =0; j < col; j++){
            grid[i][j] = arr[index]
            index++
            if(index === arr.length) index = 0
        }
    }
    
    return grid
};