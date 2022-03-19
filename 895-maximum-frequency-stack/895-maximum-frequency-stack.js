
var FreqStack = function() {
    this.freq = {}
    this.group = {}
    this.maxFreq = 0
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    const f = (this.freq[val] || 0) + 1
    this.freq[val] = f
    
    const groupVal = this.group[f] || new Array()
    this.group[f] = [...groupVal, val]
    
    
    if(f > this.maxFreq ) this.maxFreq = f
    
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    
    const val = this.group[this.maxFreq].pop()
    this.freq[val]--
    if(this.group[this.maxFreq].length === 0){
        this.maxFreq--
    }
    return val
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */