/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     if(nums.length === 1) return nums
    
//     let current = nums[0]
//     let pairFound = false
//     let duplicateFound = 0
    
//     for ( let i = 1; i < nums.length; i++){
//         if(nums[i] !== current){
//             current = nums[i]
//             pairFound = false
//         }
//         else{
//             if(!pairFound) pairFound = true
//             else{
//                 nums[i] = Infinity
//                 duplicateFound += 1
//             } 
//         }
//     }
    
//     let  lastIndex = 0
//     let currentIndex = 0
//     while (currentIndex < nums.length){
//         if(nums[currentIndex] !== Infinity && lastIndex !== currentIndex){
//            const temp = nums[currentIndex]
//             nums[currentIndex] = nums[lastIndex]
//             nums[lastIndex] = temp
//             lastIndex++
//         }else if(nums[currentIndex] === Infinity){
//             currentIndex++
//         }else{
//             currentIndex++
//             lastIndex++
//         }
//     }
   
//     return nums.length - duplicateFound
// };

function removeDuplicates(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 2]) {
            for (let j = i + 2; j < nums.length; j++) {
                nums[j - 1] = nums[j];
            }
            i--;
            nums.length--;
        }
    }

    return nums.length;
}