/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0
    let right = arr.length - k
    
    while(left < right){
        let mid = Math.floor((left + right ) / 2)
        if( x <= arr[mid]) right = mid
        else if(x >= arr[mid + k]) left = mid + 1
        else{
            if(x-arr[mid] <= arr[mid + k] -x) right = mid
            else left = mid + 1
        }
    }
    console.log(left)
    let result = []
    for ( let i =left; i < left + k ; i++){
        result.push(arr[i])
    }
    
    return result
};