/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10) return num
    // let value = num
    // while(true){
    //     const valueString = value.toString()
    //     value = Array.from(valueString).reduce(((a,b) => parseInt(a) + parseInt(b)), 0)
    //     if(value < 10) return value
    // }
    
    return 1 + (num - 1) % 9
};