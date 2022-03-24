/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a-b)
    let ans = 0
    let i = 0
    let j = people.length - 1
    while(i <= j){
        ans++
        if(people[i] + people[j] <= limit) i++
        
        j--
    }
    return ans
};