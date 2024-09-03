/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if(chars.length === 1) return 1
    
    let res = 0
    let prev = chars[0]
    let count = 1
    for(let i = 1; i < chars.length; i++){
        if(chars[i] === prev){
            count++
        }else {
            if(count === 1){
                chars[res] = prev
                res++
            }else{
                const str = count.toString();
                chars[res] = prev
                res++
                str.split("").forEach((n) => {
                    chars[res] = n
                    res++
                })
            }
            prev = chars[i]
            count = 1
        }
    }
        if(count === 1){
        chars[res] = prev
        res++
    }else{
        const str = count.toString();
        chars[res] = prev
        res++
        str.split("").forEach((n) => {
            chars[res] = n
            res++
        })
    }
    
    return res;
    
};