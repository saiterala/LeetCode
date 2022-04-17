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
var increasingBST = function(root) {
    const ans = new TreeNode(0)
    const curr = [ans]
    inOrder(root, curr)
    return ans.right
    
};

const inOrder = (node, curr) => {
    if(node){
        inOrder(node.left, curr)
        node.left = null
        curr[0].right = node
        curr[0] = curr[0].right
        inOrder(node.right, curr)
    }
}