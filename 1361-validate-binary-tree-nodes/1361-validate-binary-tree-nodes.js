/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    let edgeCount = 0
    const nodes = new Array(n).fill(0)
    
    for( let i = 0 ; i < n; i++){
        if(leftChild[i] !== -1){
            nodes[leftChild[i]]++ 
            
            if(nodes[leftChild[i]] > 1) return false;
            
            edgeCount++
        }
        if(rightChild[i] !== -1){
            nodes[rightChild[i]]++
            
            if(nodes[rightChild[i]] > 1) return false;
            
            edgeCount++
        }
    }
    if(edgeCount !== n - 1) return false
   
    let root = -1
    for(let i = 0; i < nodes.length; i++){
        if(nodes[i] === 0){
            if(root === -1){
                root = i
            }
            else return false
            
        }
    }
  
    const queue = []
    queue[0] = root
    let visitedNode = 0
    
    while(queue.length){
        const node = queue.shift()
        visitedNode++
        
        if(leftChild[node] !== -1){
            queue.push(leftChild[node])
        }
        if(rightChild[node] !== -1){
            queue.push(rightChild[node])
        }
    }
    
    return visitedNode === n
    
};