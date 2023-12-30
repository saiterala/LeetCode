/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.map = {}
    for( let i = 0; i < nums.length; i++){
        const num = nums[i]
        if(num in this.map){
            //this.map[num] = [...this.map[num], i]
            this.map[num].push(i)
        }else {
            this.map[num] = [i]
        }
    }
    
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const index = Math.floor(Math.random() * this.map[target].length)
    return this.map[target][index]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */