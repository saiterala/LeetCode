/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    
    
    let stack = []
    let i = 0
    let j = 0
    
    while(j < abbr.length){
        const num = parseInt(abbr[j])
        if(!isNaN(num)){
            if(stack.length === 0 && num ===0){
                console.log("f1")
                return false
            }
            stack.push(num)
            j++
        }else if(isNaN(num) && stack.length === 0){
                
            if(word[i] !== abbr[j]) return false
            
            i++
            j++
        }else{
            const forw = parseInt(stack.join(""))
            i +=forw
            stack = []
        }
        console.log(stack)
    }
    if(stack.length){
        console.log("i", i)
        const forw = parseInt(stack.join(""))
        i +=forw
        return i === word.length
    }
    return i >= word.length && j >= abbr.length
};