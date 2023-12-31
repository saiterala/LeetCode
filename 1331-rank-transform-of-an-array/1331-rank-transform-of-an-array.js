/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const newArr = [...arr]
    newArr.sort((a,b) => a-b)
    const map = {}
    let key = 1
    newArr.forEach(el => {
        if(!map[el]){
            map[el] = key
            key++
        }
    })
    const result = arr.map(el => map[el])
    return result
};