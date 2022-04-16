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
var convertBST = function(root) {
    let sum = new Sum(0)
    helper(root, sum)
    return root
    
};

class Sum {
    constructor(value){
        this.value = value
    }
}

const helper = (root, sum) => {
     if(root != null){
         helper(root.right, sum)
         sum.value += root.val
         root.val = sum.value
         helper(root.left, sum)
     }
    return root
}