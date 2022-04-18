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
var verticalTraversal = function(root) {
    const map = {}
    DFS(root, map, 0, 0)
    let result = []
    
    const cols = Object.keys(map).sort((a,b) => a-b)
    for (const col of cols){
        const colObj = map[col]
        const rows = Object.keys(colObj).sort((a,b) => a-b)
        let temp = []
        for (const row of rows){
            const rowArr = colObj[row]
            rowArr.sort((a,b) => a-b)
            temp.push(...rowArr)
        }
        result.push(temp)
    }
    return result
};

const DFS = (root, map, row, col) => {
  
  if(root){
    const colMap = map[col] || {}
    const rowMap = colMap[row] || []
    rowMap.push(root.val)
    colMap[row] = rowMap
    map[col] = colMap
    DFS(root.right, map, row+1, col+1)
    DFS(root.left, map, row+1, col-1)
  }  
   
    
}