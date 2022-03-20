/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    mutate(root, null, null)
    return root
};

const mutate = (node, parent, isLeft) => {
    if(!node) return
    
    const {left, right} = node
    mutate(left, node, true)
    if(parent === null){
        node.next = null
    }else if(isLeft){
        node.next = parent.right
    }else{
        if(parent.next === null){
            node.next = null
        }else{
            node.next = parent.next.left
        }
    }
    mutate(right, node, false)
}