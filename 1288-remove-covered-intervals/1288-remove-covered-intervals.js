/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    if(intervals.length === 1) return 1
    
    intervals.sort((a,b) => a[0] - b[0])
    
    let result = intervals.length
    let currentIdx = 1
    let prev = intervals[0]
    console.log(intervals)
    
    while(currentIdx < intervals.length){
        let current = intervals[currentIdx]
        if(prev[0] <= current[0] && prev[1] >= current[1]){
            result--     
        }
        else if(prev[0] === current[0]){
            result--
            prev = current
        }
        else{
            prev = current   
        }
        currentIdx++
    }
    return result
    
};