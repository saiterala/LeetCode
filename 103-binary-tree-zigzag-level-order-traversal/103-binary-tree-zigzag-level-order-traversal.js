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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []
    if(!root.left && !root.right) return[[root.val]]
    
    const queue = []
    const result = []
    queue.push(root)
    let rightToLeft = true
    
    while(queue.length){
        let currLength = queue.length
        const temp =[]
        
        while(currLength > 0){
            const node = queue.shift()
            rightToLeft ? temp.push(node.val) : temp.unshift(node.val)
            
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            
            currLength--
        }
        rightToLeft = !rightToLeft
        result.push(temp)
    }
    return result
};