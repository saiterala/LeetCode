/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    let rowStart = 0
    let colStart = 0
    let rowEnd = n
    let colEnd = n
    const result = Array(n).fill(0).map(row => Array(n).fill(0))
   
    let count = 1
    while ( rowStart <= rowEnd && colStart <= colEnd){
        for (let i = colStart ; i < colEnd; i++){
            result[rowStart][i] = count
            count++
        }
        for(let i = rowStart + 1; i < rowEnd; i++){
            result[i][colEnd - 1] = count
            count++
        }
        for(let i = colEnd - 2; i >= colStart; i--){
            result[rowEnd - 1][i] = count
            count++
        }
        for(let i = rowEnd - 2 ; i > rowStart; i-- ){
            result[i][colStart]= count
            count++
        }
        rowStart++
        rowEnd--
        colStart++
        colEnd--   
    }
    return result
};