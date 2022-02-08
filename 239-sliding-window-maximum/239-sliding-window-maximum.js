/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let result = Array(nums.length-k+1)
    
    if(nums.length<k || nums.length===0){
        return null
    }
    let deque = []
    for (let i=0; i<nums.length; i++){
        
        //move the window
        if(deque.length > 0 && deque[0] === i-k){
            deque.shift()
        }
        
        //pop the deque value if previous index value is less than current
        while(deque.length != 0 && nums[i] > nums[deque[deque.length-1]]){
            deque.pop()
        }
        deque.push(i)
        
        if(i+1 >= k){
            result[i+1-k] = nums[deque[0]] 
        }
    }
    return result
};