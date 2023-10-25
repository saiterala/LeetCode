/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.nums=[]
    this.sum = 0
    this.size = size
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.nums.push(val)
    this.sum += val
    if(this.nums.length > this.size){
        const [ diff, ...newNums] = this.nums
        this.sum -= diff
        this.nums = newNums
        return  this.sum/this.size
    }else return this.sum/this.nums.length
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */