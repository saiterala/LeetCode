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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let result = 0
    result = depthFirstSearch(root, low, high, result)
    return result
};

const depthFirstSearch = (tree, low, high, result) => {
    if(tree !== null){
        if(tree.val >= low && tree.val <= high){
        result += tree.val
            console.log('result', result)
        }
        if(tree.val > low ){
            result = depthFirstSearch(tree.left, low, high, result)
        }
        if(tree.val < high){
            result = depthFirstSearch(tree.right, low, high, result)
        }
    }
    return result
}