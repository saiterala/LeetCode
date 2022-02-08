/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if( nums.length <= k) return nums
    const map = createHashMap(nums)
    
    const numsArray = Object.keys(map)
     return quickSortHelper(numsArray, k, map)
    
    
};

const createHashMap = (nums) => {
    const map = {}
    for(const num of nums){
        map[num] = (map[num] || 0 ) + 1
     }
    return map
}

const quickSortHelper = (arr, k, map) => {
    let start = 0
    let end = arr.length - 1
    const targetPosition = arr.length - k
    
    while (true){
        let left = start + 1
        let right = end
        let pivot = start
        const pivotVal = map[arr[pivot]]
        while ( left <= right){
            if(map[arr[left]] > pivotVal && map[arr[right]] < pivotVal){
                swap(left, right, arr)
            }
            if(map[arr[left]] <= pivotVal) left++
            if(map[arr[right]] >= pivotVal)  right--     
        
        }
        swap(pivot, right, arr)
        if(right === targetPosition) return arr.slice(right)
        else if(right > targetPosition) end = right-1
        else start = right + 1
        
    }
}

const swap = (i, j, arr) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}