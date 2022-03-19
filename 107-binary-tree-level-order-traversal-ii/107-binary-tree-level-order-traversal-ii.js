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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return []
    if(!root.left && !root.right) return[[root.val]]
    
    const queue = []
    const result = []
    queue.push(root)
    
    while(queue.length){
        let currLength = queue.length
        const temp =[]
        while(currLength > 0){
            const node = queue.shift()
            temp.push(node.val)
            
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            currLength--
        }
        result.unshift(temp)
    }
    return result
};