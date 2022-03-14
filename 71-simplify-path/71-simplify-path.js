/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const tokens = path.split('/').filter(token => token.length > 0 && token !== '.')
    const stack = []
    stack.push('')
    
    for ( const token of tokens){
        if(token == '..'){
            if(stack[stack.length -1 ] === '..'){
                stack.push['..']
            }else {
                if(stack[stack.length - 1] !== '') stack.pop()
            }
        }else stack.push(token)
    }
    
    if(stack.length === 1 && stack[0] === '') return '/'
    return stack.join('/')
};