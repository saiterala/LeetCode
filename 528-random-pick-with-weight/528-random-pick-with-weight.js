/**
 * @param {number[]} w
 */
class Solution {
     constructor(nums) {
        this.nums = nums;
    }
    pickIndex = function() {
        let count = 0, picked;
        this.nums.forEach((num, i) => {
            count += num;
            if(Math.floor(Math.random() * (count / num)) === 0) {
                picked = i;
            }
        })
        return picked;
    }
    
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
