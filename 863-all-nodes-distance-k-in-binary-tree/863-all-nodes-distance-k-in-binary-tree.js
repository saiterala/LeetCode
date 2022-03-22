/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    
    const map = {}
    getParentNodes(root, map, null)
    const targetNode = root === target? root: getTargetNode(target, map)
    
    let result = []
    const set = new Set()
    const queue = [[target, 0]]
    set.add(target.val)
    
    while(queue.length){
        
        const [node, distanceFromK] = queue.shift()
        if(distanceFromK === k){
            result = queue.map(node => node[0].val)
            result.push(node.val)
            return result
        }
       
        const nextNodes = [node.left, node.right, map[node.val]]
        for (const nextNode of nextNodes){
            if(!nextNode) continue
            if(set.has(nextNode.val)) continue
            set.add(nextNode.val)
            queue.push([nextNode, distanceFromK + 1])
            
        }
    }
    return result
    
};

const getParentNodes = (node, map, parent) => {
    
    if(node){
        map[node.val] = parent
        getParentNodes(node.left, map, node)
        getParentNodes(node.right, map, node)
    }
}

const getTargetNode = (target, map) => {
    const parentNode = map[target.val]
    return parentNode?.left?.val === target ? parentNode.left : parentNode.right
}