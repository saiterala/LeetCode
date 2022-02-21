/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//     let max = -Infinity
//     let result
//     const map ={}
//     for (let i = 0; i< nums.length; i++){
//         map[nums[i]] = (map[nums[i]] || 0) + 1
//        if(map[nums[i]] > max){
//            result = nums[i]
//            max = map[nums[i]]
//        }
//     }
//     return result
// };


// Moore's voting algorithm

var majorityElement = function(nums){
    let count = 1
    let major = nums[0]
    
    for (let i=1; i< nums.length; i++){
        if(nums[i] === major){
            count++
        }else count--
        
        if(count === 0){
            major = nums[i]
            count = 1
        }
    }
    
    return major
}