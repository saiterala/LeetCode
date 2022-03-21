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
var diameterOfBinaryTree = function(root) {
    return getTreeDiameter(root).diameter
};

const getTreeDiameter = (tree) => {
    if(!tree) return new TreeInfo(0,0)
    
    const leftTree = getTreeDiameter(tree.left)
    const rightTree = getTreeDiameter(tree.right)
    
    const diameterThroughRoot = leftTree.height + rightTree.height
    const maxDiameter = Math.max(leftTree.diameter, rightTree.diameter)
    
    const currentDiamter = Math.max(maxDiameter, diameterThroughRoot)
    const height = Math.max(leftTree.height, rightTree.height) + 1
    
    return new TreeInfo(currentDiamter, height)
    
    
} 
class TreeInfo {
    constructor(diameter, height){
        this.diameter = diameter
        this.height = height
    }
}


// const maxDepth = (root, max) => {
//     if (root === null) return 0;
//     let leftH = maxDepth(root.left, max);
//     let rightH = maxDepth(root.right, max);
//     max.val = Math.max(max.val, leftH + rightH);
//     return Math.max(leftH, rightH) + 1;
// }
    
// var diameterOfBinaryTree = function(root) {
//     let max = { val: 0 };
//     maxDepth(root, max);

//     return max.val;
// };