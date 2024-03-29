/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    
    const queue = []
    const result = []
    
    queue.push(root)
    
    while(queue.length){
        let length = queue.length
        const numOfNodes = length
        let sum = 0
        
        while(length > 0){
            const node = queue.shift()
            sum += node.val
            
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            length--
        }
        result.push(sum/numOfNodes)
    }
    
    return result
};