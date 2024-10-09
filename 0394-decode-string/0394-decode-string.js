/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []
    for(const c of s){
        if(c !== ']'){
            stack.push(c);
            continue;
        }
        let str = ''
        let curr = stack.pop();
        while(curr !== '[' ){
            str= curr + str;
            curr = stack.pop()
        }
        let num = ""
        let currNum = stack.pop();
        
        while(!Number.isNaN(Number(currNum))){
            num = currNum + num
            currNum = stack.pop()
        }
        stack.push(currNum)
        stack.push(str.repeat(Number(num)))
    }
    
    return stack.join('')
};