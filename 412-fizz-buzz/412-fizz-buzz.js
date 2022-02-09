/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = []
    for ( let i =1; i <= n; i++){
        let tempString = ''
        if(i % 3 === 0) tempString= 'Fizz'
        if(i % 5 === 0) tempString = `${tempString}Buzz`
        if(tempString.length){
            result.push(tempString)
        }else result.push(i.toString())
    }
    return result
};