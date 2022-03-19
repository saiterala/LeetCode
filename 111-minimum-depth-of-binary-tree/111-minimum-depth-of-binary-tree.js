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
var minDepth = function(root) {
    return getNodeDepth(root)
};

const getNodeDepth = (node) => {
    if(!node) return 0
  
    if(!node.right) return getNodeDepth(node.left) + 1
    
    if(!node.left) return getNodeDepth(node.right) + 1

    
    return Math.min( getNodeDepth(node.left) , getNodeDepth(node.right)) + 1
}