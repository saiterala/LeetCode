/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1arr = version1.split('.')
    const v2arr = version2.split('.')
    
    let i = 0
    while(i < v1arr.length && i < v2arr.length){
        if(parseInt(v1arr[i]) > parseInt(v2arr[i])) return 1
        else if( parseInt(v1arr[i]) < parseInt(v2arr[i])) return -1
        i++
    }
    
    if( i !== v1arr.length){
       while( i < v1arr.length){
           if(parseInt(v1arr[i]) !== 0) return 1
           i++
       }
    }
    else {
        while( i < v2arr.length){
           if(parseInt(v2arr[i]) !== 0) return -1
            i++
       }
    }
    
    return 0
    
    
};