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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let sum = [0]
    return helper(root, sum)
   
};

const helper = (root, sum) => {
    if(root){
        helper(root.right, sum)
        sum[0] += root.val
        root.val = sum[0]
        helper(root.left, sum)
    }
    return root
}