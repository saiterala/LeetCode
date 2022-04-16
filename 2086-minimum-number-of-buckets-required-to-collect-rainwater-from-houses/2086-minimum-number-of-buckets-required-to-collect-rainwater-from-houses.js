/**
 * @param {string} street
 * @return {number}
 */
var minimumBuckets = function(street) {
    const length = street.length
    
    if((length === 1 && street[0] === 'H') ||
        (length >= 2 && street[0] === 'H' && street[1] === 'H' ) ||
        (length >=0 && street[length -1] === 'H' && street[length - 2] === 'H'))
        return -1
    
    let hCount = 0
    let bucket = 0
    let count = 0

    for (let i = 0; i < length; i++ ){
        if(hCount >= 3) return -1
        const val = street[i]
        if(val === '.'){
            hCount = 0
            
            if(i > 0 && street[i-1] === "."){
                bucket = 0
            }
            
        }else {
            hCount++
            
            if(bucket === 1){
                bucket = 0
                continue
            }
            count++
            if(i < length - 1 && street[i + 1] === "."){
                bucket++
            }
        }
    }
    return count
};