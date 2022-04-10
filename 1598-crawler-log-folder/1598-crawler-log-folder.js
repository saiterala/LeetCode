/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let stack = []
    
    for(const dir of logs){
        if(dir === '../'){
            stack.length > 0 && stack.pop()
        }else if( dir === './') continue
        else {
            stack.push(dir)
        }
    }
    return stack.length
};