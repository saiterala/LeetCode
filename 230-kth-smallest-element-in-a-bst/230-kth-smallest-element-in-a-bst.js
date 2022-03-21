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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    const treeInfo = new TreeInfo(0, -1)
    kthSmallestHelper(root, k, treeInfo)
    return treeInfo.lastNode; 
    
};

class TreeInfo {
    constructor(numOfNodes, lastNode){
        this.numOfNodes = numOfNodes
        this.lastNode = lastNode
    }
}

const kthSmallestHelper = (node, k, treeInfo) => {
    if(!node || treeInfo.numOfNodes === k) return
    
    kthSmallestHelper(node.left, k, treeInfo)
    if(treeInfo.numOfNodes < k){
        treeInfo.numOfNodes++
        treeInfo.lastNode = node.val
        kthSmallestHelper(node.right, k, treeInfo)
    }
}