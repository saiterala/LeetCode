/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i = 0; i < matrix.length; i++){
        for(let j= i; j < matrix.length; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    
    for (let k = 0; k < matrix.length; k++){
        const row = matrix[k]
        let i = 0
        let j = row.length - 1
        
        while(i < j){
            const temp = row[i]
            row[i] = row[j]
            row[j] = temp
            i++
            j--
        }
    }
};