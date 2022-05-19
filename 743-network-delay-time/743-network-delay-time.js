/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const adj = {}
    
    for (const [source, target, time] of times){
        adj[source] = adj[source] || []
        adj[source].push({[time]:target})
    }
  
    const signalReceived = Array(n+1).fill(Number.MAX_SAFE_INTEGER)
    BFS(signalReceived, adj, k)
    
    
    let result = -Infinity
    for(let i = 1; i < signalReceived.length; i++){
        result = Math.max(result, signalReceived[i])
    }
    
    return result === Number.MAX_SAFE_INTEGER ? -1 : result
};

const BFS = (signalReceived, adj, k) => {
    const queue = []
    queue.push(k)
    
    signalReceived[k] = 0
    
    while(queue.length){
        const curr =  queue.shift()
        if(!adj[curr]) continue
        for(const obj of adj[curr]){
            const time = Object.keys(obj)[0]
            const target = obj[time]
            const arrTime = Number(time) + signalReceived[curr]
            if(arrTime < signalReceived[target]){
                signalReceived[target] = arrTime
                queue.push(target)
            }
        }
        
    }
}