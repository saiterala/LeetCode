/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    const quantity = [[poured]]
    for (let i = 0; i <= query_row; i++){
            quantity[i+1] = Array(i+2).fill(0)
        for (let j = 0; j <= i; j++){
            let poured = (quantity[i][j] - 1.0) / 2.0
            if(poured > 0){
                quantity[i+1][j] = (quantity[i+1][j] || 0) + poured
                quantity[i+1][j+1] = (quantity[i+1][j+1] || 0) + poured
            }
        }
    }
    return Math.min(1 , quantity[query_row][query_glass])
};