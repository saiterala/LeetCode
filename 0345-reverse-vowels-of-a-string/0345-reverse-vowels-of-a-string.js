/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowelsMap = {
        a: true,
        e: true,
        i: true,
        o : true,
        u : true
    }
    
    let left = 0
    let right = s.length - 1
    
    const sArr = s.split('')
    
    while(left < right){
        if(!(sArr[left].toLowerCase() in vowelsMap)){
            left++
            continue
        }
        if(!(sArr[right].toLowerCase() in vowelsMap)){
            right--
            continue
        }
        
        const temp = sArr[left]
        sArr[left] = sArr[right]
        sArr[right] = temp
        
        left++
        right--
    }
    
    return sArr.join('')
};