/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let ans = []
    let stack = []
    let startIdx=0
    let endIdx = 0
    
    const pushToArr = (st, ed) => {
        for(let i=st + 1; i < ed; i++){
            ans.push(s[i])
        }
    }
    for(let i =0; i < s.length; i++){
        if(s[i] === '('){
            if(stack.length === 0){
                startIdx = i
            }
            stack.push('(')
        }else{
            stack.pop()
            if(stack.length === 0){
                endIdx = i
                pushToArr(startIdx, endIdx)
            }
        }
    }
    
    return ans.join('')
};