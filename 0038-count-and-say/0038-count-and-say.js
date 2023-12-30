/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let say = "1"
    
    while(n > 1){
        let next = ''
        let count = 0
        for(let i = 0; i <= say.length; i++){
            if(i === say.length ||( i > 0 && say[i] !== say[i-1])){
                next += count+ say[i-1]
                count = 0
            }
              count++
        }
        say = next
        n--
    }
    return say
};