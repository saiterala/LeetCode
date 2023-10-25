/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const inDegree = Array(numCourses).fill(0)
    const map = {}
    
    for(const req of prerequisites){
        const[course, pre] = req
        inDegree[course]++
        if(map[pre]){
            map[pre].push(course)
        }
        else{
            map[pre]= [course]
        }
    }
    
    console.log(map)
    console.log(inDegree)
    
    let res = []
    let queue = []
    
    for(let i = 0; i < numCourses; i++){
        if(inDegree[i] === 0)
            queue.push(i)
    }
    
    while(queue.length){
        numCourses--
        const curr = queue.shift()
        res.push(curr)
        
        map[curr] && map[curr].forEach(ele => {
            inDegree[ele]--
            if(inDegree[ele] === 0){
                queue.push(ele)
            }
        })
    }
    
    return numCourses === 0 ? res : []
};