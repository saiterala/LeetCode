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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    if(!root) return 0
    if(!root.left && !root.right) return 1
    let maxWidth = 1
    
    const stack = [[root, 0]]
    
    while (stack.length){
        let length = stack.length
        const firstIdx = stack[0][1] 
        let idx = firstIdx
        
        while (length > 0){
            const element = stack.shift()
            const node = element[0]
            idx = element[1]
            if (node.left) stack.push([node.left, (idx - firstIdx) * 2])
            if (node.right) stack.push([node.right, (idx - firstIdx) * 2 + 1])
            length--
        }
        maxWidth = Math.max(maxWidth, (idx - firstIdx + 1) | 0)
    }
    return maxWidth
};