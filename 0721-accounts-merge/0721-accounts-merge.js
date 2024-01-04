/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    
    const visited = new Set()
    const adjacent = {}
    
    const DFS = (mergeAcc, email) => {
        visited.add(email)
        mergeAcc.push(email)
        
        if(!(email in adjacent)){
            return;
        }
        for(const emailAcc of adjacent[email]){
            if(!visited.has(emailAcc)){
                DFS(mergeAcc, emailAcc)
            }
        }
    }
    
    // Build Adjacency list
    for(const account of accounts){
        const firstEmail = account[1]
        for(let i =2; i < account.length; i++ ){
            if(!adjacent[firstEmail]){
                adjacent[firstEmail] = []
            }
            adjacent[firstEmail].push(account[i])
            if(!adjacent[account[i]]){
                adjacent[account[i]] = []
            }
            adjacent[account[i]].push(firstEmail)
        }
    }
  
    const mergedAccount = []
    for(const account of accounts){
        const accName = account[0]
        const accFirstEmail = account[1]
        
        if(!(visited.has(accFirstEmail))){
            const mergeAcc = []
           
            DFS(mergeAcc, accFirstEmail)
            mergeAcc.sort()
            mergeAcc.unshift(accName)
            mergedAccount.push(mergeAcc)
        }
    }
    
    return mergedAccount
};