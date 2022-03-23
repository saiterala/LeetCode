/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(startValue, target) {
    let result = 0
    while(target > startValue){
       result++
       if(target % 2 === 0) target = target /2
       else target++
    }
    result += startValue - target
    return result
    
};