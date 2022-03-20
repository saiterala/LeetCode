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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
  return pathSumHelper(root, 0, targetSum)
    
};
    
const pathSumHelper = (node, sum, target) => {
    if(!node) return false
    
    sum += node.val
    if(!node.left && !node.right){
        return sum === target
    }
    
    return (pathSumHelper(node.left, sum, target) || pathSumHelper(node.right, sum, target))
}