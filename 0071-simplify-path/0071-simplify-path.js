/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const tokens = path.split("/").filter(token => token.length > 0 && token !== ".")
    
    const stack= [""]
    
    for(const token of tokens){
        if(token === ".."){
            if(stack.length && stack[stack.length - 1] !== "") {
                stack.pop()
            }
        }else {
            stack.push(token)
        }
    }
    
    if(stack.length === 1 ) return "/"
    
    return stack.join("/")
};