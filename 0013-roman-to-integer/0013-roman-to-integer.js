/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC":90,
        "CD": 400,
        "CM": 900
    }
    
    let i =0
    let total =0
    while(i < s.length){
        if(i < s.length - 1){
            if(`${s[i]}${s[i+1]}` in map){
                total += map[`${s[i]}${s[i+1]}`]
                i= i+2
                continue
            }
        }
        total += map[s[i]]
        i++
    }
    return total;
};