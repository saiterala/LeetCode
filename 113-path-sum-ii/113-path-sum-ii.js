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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result = new SumArray([])
    pathSumHelper(root, 0, [], result, targetSum)
    return result.val
    
};

class SumArray {
    constructor(value){
        this.val = value
    }
}
const pathSumHelper = (node, sum, currArray,result,target) => {
    if(!node) return
    sum += node.val
    currArray.push(node.val)
    if(!node.left && !node.right){
        if(sum === target)  result.val.push(currArray)
    }
    pathSumHelper(node.left, sum, [...currArray], result, target)
    pathSumHelper(node.right, sum, [...currArray], result, target)
    
}