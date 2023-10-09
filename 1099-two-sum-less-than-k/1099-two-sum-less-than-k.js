/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
     let  max = -1;
     nums.sort((a,b) => a-b);

     let i =0;
     let j = nums.length - 1;

     while( i < j){
         const sum = nums[i] + nums[j]
         if(sum < k){
             i++
             if(max < sum){
                 max = sum
             }
         }else{
             j--
         }
     }

     return max;
};