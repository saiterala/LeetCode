/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    
   const res = []
   for(let col = 0; col < matrix[0].length; col++){
       const tempRow = []
       for(let row = 0; row < matrix.length; row++){
           tempRow.push(matrix[row][col])
       }
       res.push(tempRow)
   }
    
    return res
};