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
var deepestLeavesSum = function(root) {
    const arr = []
    dfs(root, arr, 0)
    const levels = arr[arr.length - 1]
    return levels.reduce((a,b) => a + b )
};

const dfs = (node, arr, level) => {
    if(!node) return
    
    const val = node.val
    arr[level] = arr[level] || []
    arr[level].push(val)
    dfs(node.left,arr, level + 1)
    dfs(node.right, arr,level + 1)
}