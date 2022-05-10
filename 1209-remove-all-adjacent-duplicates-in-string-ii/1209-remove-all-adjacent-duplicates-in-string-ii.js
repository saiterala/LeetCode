/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = []
    
    for (const ch of s){
        if(stack.length && stack[stack.length - 1].key === ch ){
            stack[stack.length -1 ].val ++
        }else{
            stack.push({key: ch, val: 1})
        }
        
        if(stack[stack.length - 1]['val'] === k) stack.pop()
    }
    const result = []
    for( const obj of stack){
        for(let i =0 ; i < obj.val; i++){
            result.push(obj.key)
        }
    }
    
    return result.join('')
    
};