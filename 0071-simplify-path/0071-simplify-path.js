/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const tokens = path.split("/").filter(token => token.length > 0 && token !== ".")
    
    const stack= [""]
    
    for(const token of tokens){
        console.log(stack)
        if(token === ".."){
            if(stack.length && stack[stack.length - 1] !== "") {
                stack.pop()
            }
        }else {
            stack.push(token)
        }
    }
    
    console.log("stack", stack)
    if(stack.length === 1 ) return "/"
    
    return stack.join("/")
};