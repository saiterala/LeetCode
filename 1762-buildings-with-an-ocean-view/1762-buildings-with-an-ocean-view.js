/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    const res = []
    const stack = []
    
    for ( let i = 0; i < heights.length; i++){
        while(stack.length){
            if(heights[stack[stack.length-1]] <= heights[i]){
                stack.pop()
            }else break
        }
        
        stack.push(i)
    }
    return stack
};