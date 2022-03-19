/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

class PreorderRootIdx {
    constructor(val){
        this.idx = val
    }
}
var buildTree = function(preorder, inorder) {
    const map = {}
    
    for (let i = 0; i< inorder.length; i++){
        map[inorder[i]] = i
    }
    
    const preorderRootIdx = new PreorderRootIdx(0)
   
    return arrayToTree(preorder, 0, preorder.length - 1, map, preorderRootIdx)
    
};

const arrayToTree = (preorder, left, right, map, preorderRootIdx) => {
    if(left > right) return null
    
    const rootValue = preorder[preorderRootIdx.idx]
    preorderRootIdx.idx++
    
    const treeNode = new TreeNode(rootValue)
    treeNode.left = arrayToTree(preorder, left, map[rootValue] - 1, map, preorderRootIdx)
    treeNode.right = arrayToTree(preorder, map[rootValue] + 1, right,map, preorderRootIdx)
    
    return treeNode
}