/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    const leftProduct = Array(nums.length).fill(1)
    const rightProduct = Array(nums.length).fill(1)
    
    for( let i = 1; i < nums.length; i++){
        leftProduct[i] = leftProduct[i-1] * nums[i-1]
    }
   
    for(let i = nums.length - 2; i>=0; i--){
        rightProduct[i] = rightProduct[i + 1] * nums[i+1]
    }
   
    let r = 1
    for(let i = nums.length -1; i >=0; i--){
        leftProduct[i] = r * leftProduct[i]
        r = r * nums[i]
    }

    // let result = []
    // for(let i = 0; i < nums.length; i ++){
    //     result[i] = leftProduct[i] * rightProduct[i]
    // }
    return leftProduct
};