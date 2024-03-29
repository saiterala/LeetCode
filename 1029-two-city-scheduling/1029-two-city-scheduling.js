/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a,b) => ((a[0] - a[1]) - (b[0] - b[1])))
    
    let result = 0
    const length = costs.length/2
    for ( let i =0; i < length; i++) {
        result += costs[i][0] + costs[i+length][1]
    }
    return result
};