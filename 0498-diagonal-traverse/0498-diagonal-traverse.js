/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let r = 0
    let c = 0
    let rl = mat.length - 1
    let cl = mat[0].length - 1 
    let goingDown = false
    let res = []
    
    const isNotOutOfBound = (r, c) => r >=0 && r <= rl && c >=0 && c <= cl
    
    while(isNotOutOfBound(r, c)){
        res.push(mat[r][c])
        if(goingDown){
            if(r === rl){
                c++
                goingDown = false
            }else if(c === 0){
                r++
                goingDown = false
            } else{
                r++
                c--
            }
        }else {
            if(c === cl){
                r++
                goingDown = true
            }else if(r === 0){
                c++
                goingDown = true
            }else{
                r--
                c++
            }
            
        }
    }
    return res
};