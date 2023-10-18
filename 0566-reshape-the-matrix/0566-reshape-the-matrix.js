/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const row = mat.length
    const col = mat[0].length
    
    if(row === r && col === c){
        return mat
    }
    if(row*col !== r*c){
        return mat
    }
    
    const res = Array(r).fill(0).map(_ => Array(c).fill(0))
    console.log(res)
    let rCount = 0
    let cCount = 0
    
    for( let i = 0; i < row; i++){
        for(j=0; j < col; j++){
          
            res[rCount][cCount] = mat[i][j]
            cCount++
            if(cCount === c){
                rCount++
                cCount =0
            }
        }
    }
    
    console.log(res)
    return res
};