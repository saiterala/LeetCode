/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
var findRLEArray = function(encoded1, encoded2) {
    let res = []
    let p1 = encoded1.length
    let p2 = encoded2.length
    let i = 0
    let j = 0
    
    while(i < p1 && j < p2 ){
        const e1 = encoded1[i]
        const e2 = encoded2[j]
        
        const prod = e1[0] * e2[0]
        const min = Math.min(e1[1], e2[1])
        e1[1] = e1[1] - min
        e2[1] = e2[1] - min
        if(e1[1] === 0) i++
        if(e2[1] === 0) j++
        let next = [prod, min]
        
        if( res.length > 0 && res[res.length - 1][0] === prod){
            const element = res.pop()
            next = [prod, min + element[1]]
        }
        
        res.push(next)
    }
    
    return res
};