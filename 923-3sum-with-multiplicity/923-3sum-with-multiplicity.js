/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    arr.sort((a,b) => a-b)
    
    let ans = 0
    const module = Math.pow(10, 9) + 7
    
    for (let i = 0; i < arr.length ; i++){
        let j = i + 1
        let k = arr.length - 1
        while (j < k){
            let sum = arr[i] + arr[j] + arr[k]
            
            if(sum < target) j++
            else if(sum > target) k--
            else if ( arr[j] !== arr[k]){
                let left = 1
                let right = 1
                
                while (j <= k && arr[j] ===arr [j+ 1]){
                    left++
                    j++
                } 
                while(k >= j && arr[k] === arr[k-1]){
                    right++
                    k--
                } 
                ans += left * right
                ans  %= module
                j++
                k--
                
            }else {
                ans += (k - j) * (k - j + 1) / 2;
                ans %= module;
                break;
            }
        }
    }
    return ans
};