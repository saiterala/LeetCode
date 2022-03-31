/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length
    let cols = matrix[0].length
    let i = 0
    let j = cols - 1
    
    while(i < rows  && j >= 0){
        if(target === matrix[i][j]) return true
        
        if(target < matrix[i][j]) j--
        else if(target > matrix[i][j]) i++
    }
    
    return false
    
};