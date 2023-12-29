/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let ans = []
    
    let i = 0
    let j = 0
    
    while(i < firstList.length && j < secondList.length){
        const lo = Math.max(firstList[i][0], secondList[j][0])
        const hi = Math.min(firstList[i][1], secondList[j][1])
        
        if(lo <= hi){
            ans.push([lo, hi])
        }
        if(firstList[i][1] < secondList[j][1]){
            i++
        }else {
            j++
        }
    }
    
    return ans
};