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
var rightSideView = function(root) {
    const result = []
    getRightSideView(root, result, 1)
    return result
    
};

const getRightSideView = (node, result, level) => {
    if(!node) return
    
    if(result.length < level) result.push(node.val)
    
    getRightSideView(node.right, result, level + 1)
    getRightSideView(node.left, result, level + 1)
}