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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    const treeInfo = new TreeInfo()
    
    inOrder(root, treeInfo)

    const temp  = treeInfo.second.val
    treeInfo.second.val = treeInfo.first.val
    treeInfo.first.val = temp
    return root
    
};

class TreeInfo {
    constructor(){
        this.previous = null
        this.first = null
        this.second = null
    }
}

const inOrder = (root, treeInfo) => {
    if(root){
        inOrder(root.left, treeInfo)
        if(!treeInfo.first && (root.val < treeInfo.previous?.val)){
            treeInfo.first = treeInfo.previous
           treeInfo.second = root
        }else if(treeInfo.first && (root.val < treeInfo.previous?.val)){
            treeInfo.second = root
        }
        treeInfo.previous = root
        inOrder(root.right, treeInfo)
    }
}