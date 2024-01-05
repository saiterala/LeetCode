/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let row = nums.length -1
    let map = {}

    for (let i = row; i >= 0; i --){
        for( let j =0; j < nums[i].length; j ++ ){
            const sum = i +j
            if( !map[sum]){
                map[sum] = []
            }
            map[sum].push(nums[i][j])
        }
    }

    let i =0
    const result = []
    while(i in map){
        result.push(...map[i])
        i++
    }

    return result;

};