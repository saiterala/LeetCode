/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adj = new Array(numCourses)
    for(let i = 0; i < numCourses; i ++){
        adj[i] = []
    }
    for(const req of prerequisites){       
        adj[req[0]].push(req[1])
    }
   
    const vis = new Array(numCourses).fill(0)
    for(let i = 0 ; i < numCourses; i++){
        if(vis[i] !== 0) continue
        if(dfs(i, adj, vis)) return false
    }
    return true
};

const dfs = (s, adj, vis) => {
    vis[s] = 2
    
    for(let i =0; i < adj[s].length; i++ ){
        const ele = adj[s][i]
        if(vis[ele] === 0){
            if(dfs(ele, adj, vis)) return true
        }else if(vis[ele] === 2) return true
    }
    vis[s] = 1
    return false
}