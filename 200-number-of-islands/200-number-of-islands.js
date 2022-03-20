/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dirs = [[-1,0], [1,0,], [0,1], [0,-1]]
    const visited = grid.map(row => row.map(() => false))
    let result = 0
    for( let i =0; i < grid.length; i++){
        for(let j = 0; j< grid[i].length; j++){
            
            
            if(visited[i][j]) continue
            if(grid[i][j] === '0') continue
            const queue = [[i,j]]
    
            while (queue.length){
                let [x,y] = queue.pop()
                 if(grid[x][y] === '0') continue
                 if(visited[x][y]) continue
                 visited[x][y] = true
                
                 for (const dir of dirs){
                     const newX = x + dir[0]
                     const newY = y + dir[1]
                     
                     if(newX >= 0 && newX < grid.length && 
                        newY >= 0 && newY < grid[i].length){
                         queue.push([newX, newY])
                     }
                 }

            }
            
            result += 1
        }
    }
    return result
};