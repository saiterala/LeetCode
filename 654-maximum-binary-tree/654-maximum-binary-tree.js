/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    return constructTree(nums, 0, nums.length)
};

const constructTree = (nums, l, r) => {
    if (l === r) return null
    
    const maxIndex = getMaxIndex(nums, l, r)
  
    const tree = new TreeNode(nums[maxIndex])
    tree.left = constructTree(nums, l, maxIndex)
    tree.right = constructTree(nums, maxIndex + 1, r)
    return tree
}

const getMaxIndex = (nums, l, r) => {
   
    let max = l
    
    for( let i = l+1; i < r; i++){
        if (nums[max] < nums [i]) max = i
    }
    return max
} 