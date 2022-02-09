/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
 
    if(s.length <= 1) return true
    
    let left = 0
    let right = s.length - 1
    
    while( left < right){
        const leftVal = s[left]
        const rightVal = s[right]
        
        if(leftVal < 'a' || leftVal > 'z'){
            if(leftVal < '0' || leftVal > '9'){
                 left++
                 continue
            }
           
        } 
         if(rightVal < 'a' || rightVal > 'z'){
            if(rightVal < '0'|| rightVal > '9'){
                 right--
                 continue
            }
           
        } 
         
        if(leftVal === rightVal){
           
            left++
            right--
        }
        else return false
    }
    
    return true
    
};