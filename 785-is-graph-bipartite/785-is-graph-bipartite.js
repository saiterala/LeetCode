/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const color = Array(graph.length)
    let queue = []
    let node
    
    for (let i=0; i < graph.length ; i++){
        if(color[i] === undefined){
            color[i] = 1
            queue.push(i)
            while(queue.length){
                node = queue.shift()
                for (const edge of graph[node]){
                    if(color[edge] === undefined){
                        color[edge] = color[node] === 1 ? 0 : 1
                        queue.push(edge)
                    }else{
                        if(color[edge] === color[node]) return false
                    }
                }
            }
        }
    }
    return true
};