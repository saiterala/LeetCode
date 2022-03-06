/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let maxNumber = -Infinity
    let points = {}
    
    for ( const num of nums){
        points[num] = (points[num] || 0) + num
        maxNumber = Math.max(num, maxNumber )
    }
    let n = Object.keys(points).length
    let twoBack = 0
    let oneBack = 0
  
    
    if(maxNumber < n + n * (Math.log(n)/Math.log(2))){
        
        oneBack = points[1] || 0
        for(let i = 2; i <= maxNumber; i++){
            let temp = oneBack
            oneBack = Math.max(oneBack, twoBack + (points[i] || 0) )
            twoBack = temp
        }
    }else {
        let elements = Object.keys(points).sort()
        oneBack = points[elements[0]]
        for ( let i=1; i < elements.length ; i++){
            let curr = elements[i]
            let temp = oneBack
            if(curr === elements[i-1] + 1){
                oneBack = Math.max(oneBack, twoBack + points[curr])
            }else{
                oneBack += points[curr]
            }
            twoBack = oneBack
        }
    }
    
    return oneBack
};