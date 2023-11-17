
var HitCounter = function() {
    this.hits = []
    this.total = 0
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    if(this.hits.length === 0 || this.hits[this.hits.length - 1].timestamp !== timestamp){
        this.hits.push({timestamp, count: 1})
    }else{
        this.hits[this.hits.length - 1].count++
    }
    this.total++
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    console.log(this.hits)
    while(timestamp - this.hits[0]?.timestamp > 299){
        const item = this.hits.shift()
        this.total -= item.count
    }
    return this.total
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */