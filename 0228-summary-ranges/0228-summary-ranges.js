/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(!nums.length){
        return nums
    }
    const res = []
    let temp = [nums[0]]
    
    for(i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i-1] + 1){
            if(nums[i-1] !== temp[0] ){
                temp.push(nums[i-1])
                res.push(temp.join("->"))
            }else{
                res.push(temp[0].toString())
            }    
            temp = [nums[i]]       
            
        }
    }
    if(temp[0] !== nums[nums.length -1]){
        temp.push(nums[nums.length -1])
    }
    res.push(temp.join("->"))
    return res;
    
};