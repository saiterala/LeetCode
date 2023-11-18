/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
//https://leetcode.com/problems/grid-illumination/discuss/1236574/Simple-Explained-Easy-Efficient-solution
var gridIllumination = function(n, lamps, queries) {
    const rows = {}
    const cols = {}
    const diagnol = {}
    const antidiagnol = {}
    const lampCordinateMap = {}
    const ans = []
    
     const illuminate = (row, col) => {
        rows[row] = (rows[row] || 0) + 1
        cols[col] = (cols[col] || 0) + 1
        
        const diaCoor = (row - col) + (n -1)
        diagnol[diaCoor] = (diagnol[diaCoor] || 0) + 1
        const antiDiaCoor = row + col
        antidiagnol[antiDiaCoor] = (antidiagnol[antiDiaCoor] || 0) + 1
    }
    
    const turnOff = (row, col) => {
        rows[row] = (rows[row] || 1) - 1
        cols[col] = (cols[col] || 1) - 1
        
        const diaCoor = (row - col) + (n -1)
        diagnol[diaCoor] = (diagnol[diaCoor] || 1) - 1
        const antiDiaCoor = row + col
        antidiagnol[antiDiaCoor] = (antidiagnol[antiDiaCoor] || 1) - 1
    }
    
    for( const lamp of lamps){
        const [row, col] = lamp
        if(lampCordinateMap[row+'_'+col] === undefined){
            illuminate(row, col);
            lampCordinateMap[row+'_'+col] = true
        }
    }
    
    for(const querie of queries){
        const [row, col] = querie
        if(rows[row] > 0 || cols[col] > 0 || diagnol[(row-col)+ (n-1)] > 0 || antidiagnol[row+col] > 0){
            ans.push(1)
        }else ans.push(0)
        
        //turn off adjustent 8
        for(let i = row -1; i <= row + 1 ; i++){
            for (let j = col-1; j <= col+1; j++){
                if(lampCordinateMap[i+'_'+j]){
                    turnOff(i, j)
                    delete lampCordinateMap[i+'_'+j]
                }
            }
        }
    }
    
    return ans;
};