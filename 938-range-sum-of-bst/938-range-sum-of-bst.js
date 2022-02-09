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
    let result = []
    depthFirstSearch(root, low, high, result)
    return result.reduce(((a,b) => a+b),0)
};

const depthFirstSearch = (tree, low, high, result) => {
    if(tree !== null){
        if(tree.val >= low && tree.val <= high){
        result.push(tree.val)
        }
        if(tree.val > low ){
            depthFirstSearch(tree.left, low, high, result)
        }
        if(tree.val < high){
            depthFirstSearch(tree.right, low, high, result)
        }
    }
}