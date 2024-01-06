/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    let i =0
    let j = num.length - 1
    
    while(i <= j){
        if(num[i] === "6" && num[j] === "9") {
            i++
            j--
            continue
        }
        if(num[i] === "9" && num[j] === "6"){
            i++
            j--
            continue
        }
        if(num[i] === "8" && num[j] === "8"){
            i++
            j--
            continue
        }
        if(num[i] === "0" && num[j] === "0") {
            i++
            j--
            continue
        }
         if(num[i] === "1" && num[j] === "1") {
            i++
            j--
            continue
        }
        else{ return false}
    }
    
    return true
};