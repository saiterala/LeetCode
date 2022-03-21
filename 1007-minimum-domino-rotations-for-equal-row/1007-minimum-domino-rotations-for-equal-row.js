/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    let count = 0
    let res = Infinity
    let same = false
    const topsCount = Array(6).fill(0)
    const bottomsCount = Array(6).fill(0)
    
    for (let i =0; i < tops.length; i++){
        if(tops[i] === bottoms[i]){
            if(!same) same = tops[i]
            else if( same !== tops[i]) return -1
            
            count++     
            continue
        }
        topsCount[tops[i] - 1]++
        bottomsCount[bottoms[i] - 1]++
    }
    if(count === tops.length) return 0
    console.log(same)
    
    for(let i = 0; i < 6 ; i++){
        if(!same && topsCount[i] + bottomsCount[i] === tops.length) res = Math.min(res, topsCount[i], bottomsCount[i] )
         if(same && topsCount[i] + bottomsCount[i] === tops.length-count && i === same - 1) res = Math.min(res, topsCount[i], bottomsCount[i] )
    }
    return res!==Infinity ? res : -1;
};