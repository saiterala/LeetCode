/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let result = 0
    if(nums.length < 3) return result
    let i = 2
    let preDiff = nums[0] - nums[1]
    let currCount = 2
    while( i < nums.length){
        let diff = nums[i-1] - nums[i]
        if(diff === preDiff){
            currCount++
        }else{
            preDiff = diff
            result += getTotalCount(currCount)  
            currCount = 2
        }
        i++
    }
    result += getTotalCount(currCount)
    
    return result
};

const getTotalCount = (n) => {
    console.log(n)
    if(n < 3) return 0
    if(n === 3) return 1
    return getTotalCount(n-1) + (n-2)
}

//3. --> 1
//4 ---> 3
//5 ---> 6
//6 ---> 10
//7 ---> 15
//8 ---> 21
