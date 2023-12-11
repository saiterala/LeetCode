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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let closet = Infinity
    let node = root
    
    while(node != null){
        const val = node.val
        closet = Math.abs(val - target) < Math.abs(closet-target) || (Math.abs(val- target) === Math.abs(closet- target) && val < target) ? val : closet
        node = val < target ? node.right : node.left
    }
    return closet
};