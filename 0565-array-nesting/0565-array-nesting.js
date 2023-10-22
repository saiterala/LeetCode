/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    const set = new Set()
    let max = 0
    for(let i =0; i < nums.length ; i ++){
        if(!set.has(i)){
             let result = 0
             const start = nums[i]
             do{
                result++
                i = nums[i]
                 set.add(i)
            }while(start != nums[i])
            max = Math.max(result, max)
        }
        
    }
   
    return max
    
};