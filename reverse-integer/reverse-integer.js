/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const y =  Math.abs(x).toString().split("")
    let start = 0
    let end = y.length -1
    
    console.log(x)
    while(start < end){
        let temp = y[start]
        y[start] = y[end]
        y[end] = temp
        start++
        end--
    }
    
    console.log(y)
    let val =  parseInt(y.join(""))
    if( val > 0x7FFFFFFF) return 0;
       
    return x < 0 ? -val : val
};