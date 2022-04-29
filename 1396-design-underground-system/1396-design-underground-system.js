
var UndergroundSystem = function() {
    this.map = {}
    this.avgMap = {}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.map[id] = {
        "start": stationName,
        "time": t
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    
    const startObj = this.map[id]
    const {start, time} = startObj
    const timeDiff = t - time
    const str = `${start}-${stationName}`
    let avgArr = this.avgMap[str]
    if(!avgArr){
        avgArr = [timeDiff]
        
    }else{
        avgArr.push(timeDiff)
    }
    this.avgMap[str] = avgArr
    
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const str = `${startStation}-${endStation}`
    
    const arr = this.avgMap[str]
    const length = arr.length
    return arr.reduce((a,b) => a + b)/ length
    
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */