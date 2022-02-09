/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0] === 1) return -1
    if(grid.length === 1 && grid[0].length === 1) return 1
    const queue = [[0,0,0]]
    const directions = [[0,1], [1,0], [0,-1], [-1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1] ]
    let pathLengths = Array(grid.length)
    for (let i = 0; i< pathLengths.length; i++){
        pathLengths[i] = Array(grid.length).fill(Infinity)
    }
    
    while(queue.length){
        const [x, y, step] = queue.shift()
        if(grid[x,y] === 1) continue
        
         grid[x][y] = 1
        
        for (const dir of directions){
            const newX = x + dir[0]
            const newY = y + dir[1]
            
            if( newX < 0 || newX >= grid.length || newY < 0 || newY >= grid.length || grid[newX][newY] === 1) continue
           
            const tempStep = step + 1
           
            if(pathLengths[newX][newY] > tempStep){
                pathLengths[newX][newY] = tempStep
                queue.push([newX, newY, tempStep])
            }
            
        }
    }
    
    return pathLengths[grid.length - 1][grid.length - 1] === Infinity ? -1 : pathLengths[grid.length -1][grid.length - 1] + 1
    
};