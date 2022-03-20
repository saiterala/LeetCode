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
    if(!root) return root
    const queue = []
    queue.push(root)

    while(queue.length){
       

        
        let previous = queue.shift()
        let length = queue.length
        if(previous.left) queue.push(previous.left)
        if(previous.right) queue.push(previous.right)  

        while(length > 0){
            let currentNode = queue.shift()
            previous.next = currentNode
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)  
            previous = currentNode
            length--
        }
       
    }
    return root
};

