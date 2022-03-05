/*
TOPIC:manually delete will earn points, but passively delete nums[i]-1 and nums[i]+1(won't earn anything) so similar to house robbery(NOT STEAL ADJACENT HOUSE[i-1] or [i-2]+cur)
STEP:
1.use map store {n: accumlateN}
2.use dp store 1D array size is maxofn +1, dp[i] will store maxiumum number of points so far
*/
var deleteAndEarn = function(nums) {
    if (nums == null || nums.length == 0) return 0;
    //create map store n:accumlateN
    const accuN = new Array(Math.max(...nums) + 1).fill(0);
    for (const n of nums){
        accuN[n] += n;
    }
    //create dp dp[i] mean maximum profit
    const dp = new Array(Math.max(...nums) + 1).fill(0);
    let profit = 0;
    dp[0] = accuN[0];
    dp[1] = Math.max(dp[0], accuN[1]);
    dp[2] = Math.max(dp[1], accuN[2]);
    
    if (accuN.length <= 2) {
        return dp[1];    
    }
    else if (accuN.length <= 3) return dp[2];
    else{
        for(let i = 3; i < dp.length; i++){
            dp[i] = Math.max(dp[i-1], dp[i-2]+accuN[i]);
            profit = Math.max(dp[i], profit) //must have it since no always skip one, should based on value max
        }
    }
    return profit;
};