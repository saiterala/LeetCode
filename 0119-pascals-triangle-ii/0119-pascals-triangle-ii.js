/**
 * @param {number} rowIndex
 * @return {number[]}
 */
//1 4 6 4 1
//1 5 10 10 5 1
//1 6 15 20 15 6 1
var getRow = function(rowIndex) {
    
  let res = [1];
    let prev = 1;
    for(let k = 1; k <= rowIndex; k++) {
        let next_val = prev * (rowIndex - k + 1) / k;
        res.push(next_val);
        prev = next_val;
    }
    return res;
    
};