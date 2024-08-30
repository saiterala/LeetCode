/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    const maxCandy = Math.max(...candies)
    const result = []
    for(const candy of candies){
        if(candy + extraCandies < maxCandy) result.push(false)
        else result.push(true)
    }
    
    return result;
};