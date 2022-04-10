/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let dirLength = 0
    
    for(const dir of logs){
        if(dir === '../'){
           dirLength > 0 && dirLength--
        }else if( dir === './') continue
        else {
            dirLength++
        }
    }
    return dirLength
};