/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    if(points.length <= k) return points
    
    const map = createHashMap(points)
    const mapKeys = Object.keys(map)
    const sortedIndices =  quickSortHelper(mapKeys, k, map)
    console.log(sortedIndices)
    for ( let i =0; i < sortedIndices.length; i++){
        sortedIndices[i] = points[sortedIndices[i]]
    }
    return sortedIndices
};

const createHashMap = (points) => {
    const map = {}
    for (let i = 0; i < points.length; i++){
        const [x, y] = points[i]
        map[i] = (x * x) + (y * y) 
    }
    return map
}

const quickSortHelper = (arr, k, map) => {
    let start = 0
    let end = arr.length - 1
    
    while(true){
        let left = start + 1
        let right = end
        let pivot = start
        
        while (left <= right){
            const pivotVal = map[arr[pivot]]
            const leftVal = map[arr[left]]
            const rightVal = map[arr[right]]
            
            if(leftVal > pivotVal && rightVal < pivotVal){
                swap(left, right, arr)
            }
            if(leftVal <= pivotVal) left++
            if(rightVal >= pivotVal) right--
        }
        
        swap(pivot, right, arr)
        
        if(right === k ) return arr.slice(0, right)
        if(right < k)  start = right  + 1
        else end = right -1
    }
}

const swap = (i,j, arr) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}