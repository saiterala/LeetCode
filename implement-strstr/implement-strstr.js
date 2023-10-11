/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    let pointer1 = 0
    let pointer2 = 0
    let count = 0
    
    while( pointer1 < haystack.length ){
        if(haystack[pointer1] === needle[pointer2]){
            pointer1++
            pointer2++
            count++
            if(count === needle.length){
                return pointer1 - (needle.length)
            }
            continue
        }else{
            pointer2 = 0
            pointer1 = pointer1 - count + 1
            count = 0
        }
    }
    return -1
};