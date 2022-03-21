/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    
    let lastPosition = Array(26)
    
    for (let i =0; i< s.length; i++){
        let pos = s[i].charCodeAt() - 96
        lastPosition[pos] = i
    }
    let j = 0
    let anchor = 0
    const result = []
    
    for (let i =0; i < s.length; i++){
        j = Math.max(j, lastPosition[s[i].charCodeAt() - 96])
        if(i === j){
            result.push(i - anchor +1)
            anchor = i+ 1
        }
    }
    return result
};