/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const set = new Set()
    const queue = [[0,0,k,0]]
    const dirs = [[1, 0], [0, 1], [0, -1], [-1, 0]]
    
    while(queue.length){
        const [x, y, currK, step] = queue.shift()
        if(currK === -1) continue
        if (x === grid.length -1 && y === grid[0].length - 1) return step
        const setString = `${x}${y}${currK}`
        
        if(set.has(setString)) continue
        
        set.add(setString)
        
        for (const dir of dirs){
            const nextX = x + dir[0]
            const nextY = y + dir[1]
            
            if(nextX < 0 || nextX > grid.length - 1 || nextY < 0 || nextY > grid[0].length - 1) continue
            if(grid[nextX][nextY] === 1) queue.push([nextX, nextY, currK - 1, step + 1])
            else queue.push([nextX, nextY, currK, step + 1])
        }
    }
    
    return -1
};