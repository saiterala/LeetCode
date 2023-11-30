/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  if(num.length <= 1) return num
  
    let maxValue = -1
    let maxIdx  = -1
    let leftIdx  = -1
    let rightIdx = -1
    
    const arr = num.toString().split("")
  
    for(let i = arr.length - 1 ; i >= 0; i--){
        const digit = parseInt(arr[i])
        if(digit > maxValue){
            maxValue = digit
            maxIdx = i
        }else if( digit < maxValue){
            leftIdx = i
            rightIdx = maxIdx
        }
    }
   
    if(leftIdx === -1) return num
    
   const temp = arr[leftIdx]
   arr[leftIdx] = arr[rightIdx]
    arr[rightIdx] = temp
    
    return arr.join("")
};