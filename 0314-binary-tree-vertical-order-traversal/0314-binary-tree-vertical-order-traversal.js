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
var verticalOrder = function(root) {
    let result = []
    let col_max = 0
    let col_min = 0
    const columnMap = {}
    const queue = []
    queue.push([root, 0])
    
    while(queue.length){
        const [node, col] = queue.shift()
        
        if(node != null){
            col_min = Math.min(col_min, col)
            col_max = Math.max(col_max, col)
            
            if(col in columnMap){
                columnMap[col].push(node.val)
            }else{
                columnMap[col] = [node.val]
            }
            
            queue.push([node.left, col-1])
            queue.push([node.right, col + 1])
        }
    }
    console.log(columnMap)
   
    if(Object.keys(columnMap).length > 0){
         for(let i = col_min; i <=col_max; i++){
            result.push(columnMap[i])
        }
    }
   
    return result;
};