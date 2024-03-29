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
 */
var BSTIterator = function(root) {
    this.stack = []
    this.traverse(root)
};

BSTIterator.prototype.traverse = function(root){
    if(root !== null){
       
        this.traverse(root.right)
        this.stack.push(root.val)
        this.traverse(root.left)
    }
}
/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
   return this.hasNext() ? this.stack.pop() : null
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return Boolean(this.stack.length)
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */