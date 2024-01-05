/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const open = []
    
    let res = 0
    
    let i =0
    while( i < s.length){
        if(s[i] === "("){
            open.push('(')
            i++
        }else {
            if(open.length > 0){
                if( s[i+1] === ")"){
                    open.pop()
                    i = i + 2
                }else {
                    res++
                    open.pop()
                    i = i +1
                }
            }else{
                res++
                open.push('(')
            }
        }
    }
    while(open.length){
        open.pop()
        res+=2
    }
    
    return res
};