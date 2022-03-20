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
var sumNumbers = function(root) {
    return dfs(root, 0, 0)
};

const dfs = (node, result, branchSum) => {
    if(!node) return result
    if(!node.left && !node.right){
        result += (branchSum * 10) + node.val
        return result
    }else{
        branchSum = (branchSum * 10) + node.val
        result = dfs(node.left, result, branchSum)
        result = dfs(node.right, result, branchSum)
     
    }
    return result
}