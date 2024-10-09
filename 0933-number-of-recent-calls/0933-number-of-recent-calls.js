
var RecentCounter = function() {
    this.counter = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.counter.push(t)
    
    const min = t-3000
    const max = t
    let count = 0
    
    for(let i = this.counter.length - 1; i>= 0; i--){
        if(this.counter[i] <= max && this.counter[i] >= min){
            count++
        }else break;
    }
    return count;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */