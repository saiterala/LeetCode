/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0
    for (let i =0; i < columnTitle.length; i++){
        let value = Math.pow(26, columnTitle.length - 1 - i)
        let charValue = columnTitle[i].charCodeAt() - 64
        result = result + (value * charValue)
    }
    return result
};