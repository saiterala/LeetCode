/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    nums.sort((a,b) => a-b);
    const n = nums.length
    nums = [...new Set(nums)];
    console.log(nums)
    
    let ans = Number.MAX_SAFE_INTEGER;

    for ( let i =0; i < nums.length; i++){
        const s = nums[i]
        const e = s + n-1
        let idx = binerySearch(nums, e);
        

        ans = Math.min(ans, n- (idx - i))
    }

    return ans
};

const binerySearch = (nums, target) => {
    let left = 0
    let right = nums.length - 1;

    while (left <= right){
        const mid = left + Math.floor((right -left) / 2);

        if(nums[mid]  <= target){
            left = mid +1
        }else {
            right = mid -1
        }
    }
    return left
}