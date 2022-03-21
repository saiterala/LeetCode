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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root) return false
    if(isEqual(root, subRoot)) return true
    
    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
};

const isEqual = (tree1, tree2) => {
    if (!tree1 && !tree2) return true
    
    if(!tree1 || !tree2 || tree1.val != tree2.val ) return false
    
    return (isEqual(tree1.left , tree2.left) && isEqual(tree1.right, tree2.right))
}