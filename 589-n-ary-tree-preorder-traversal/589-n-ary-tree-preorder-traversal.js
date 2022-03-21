/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const result = []
    preorderHelper(root, result)
    return result
    
};

const preorderHelper = (node, arr) => {
    if(!node) return
    
    arr.push(node.val)
    for(const child of node.children){
        preorderHelper(child, arr)
    }
}