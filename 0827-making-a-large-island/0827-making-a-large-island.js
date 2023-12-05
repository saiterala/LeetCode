/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const islandMap = new Map()
    paintIsland(grid, islandMap)
    //console.log("MaP", islandMap)
    //console.log("GRID", grid)
    return searchIsland(grid, islandMap)
};

const dir = [[-1,0], [1, 0], [0, -1], [0, 1]] 

const validGrid = (r, c, l) => r >= 0 && r < l && c >= 0 && c < l 

const paintIsland = (grid, map) => {
    
    let label = 2
    let area = 0
    
    const dfs = (grid, r, c) => {
        grid[r][c] = label
        area++
        
        for( const [dr, dc] of dir){
            const nr = r + dr
            const nc = dc + c
            if(validGrid(nr, nc, grid.length) && grid[nr][nc] === 1){
                dfs(grid, nr, nc)
            }
        }
    }
    
    for(let i =0; i < grid.length; i++){
        for (let j =0; j < grid[0].length; j++){
            if(grid[i][j] === 1){
                dfs(grid, i , j)
                map.set(label, area)
                area = 0
                label++
            }
        }
    }
}

const searchIsland = (grid, map) => {
    let res = 0
    
    
    for(let i =0; i < grid.length; i++){
        for(let j =0; j < grid[0].length; j++){
            if( grid[i][j] === 0){
                let area = 1
                const seen = new Set()
                for(const [dr, dc] of dir){
                    const nr = dr + i
                    const nc = dc + j
                    if(!validGrid(nr, nc , grid.length)) continue
                    if(map.has(grid[nr][nc]) && !seen.has(grid[nr][nc])){
                        area += map.get(grid[nr][nc])
                        seen.add(grid[nr][nc])
                       
                    }
                }
                 res = Math.max(res, area)
            }
        }
    }
    return res ? res : grid.length * grid.length;
}