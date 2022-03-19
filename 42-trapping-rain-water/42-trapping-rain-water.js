/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const trapWater = Array(height.length)
    
    let leftMax = 0
    for(let i = 0; i< height.length; i++){
        trapWater[i] = leftMax
        leftMax = Math.max(leftMax, height[i])
    }
    
    let rightMax = 0
    for (let i = height.length -1 ; i >=0 ; i--){
        
        const currHeight = height[i]
        const minHeight = Math.min(trapWater[i], rightMax)
        if(currHeight < minHeight){
            trapWater[i] = minHeight- currHeight
        }else trapWater[i] = 0
        
        rightMax = Math.max(rightMax, currHeight)
    }
    
    return trapWater.reduce(((a,b) => a + b),0)
};