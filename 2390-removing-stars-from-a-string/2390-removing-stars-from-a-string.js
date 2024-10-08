/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = []
    for(const character of s){
        if(character !== '*'){
            stack.push(character);
        }else{
            if(stack.length){
                stack.pop()
            }
        }
    }
    return stack.join('')
};