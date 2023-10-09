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
 * @return {string[]}
 */
 //Time O(n) || Space O(n)
var binaryTreePaths = function(root) {
    const paths= []
    const dfs = (node, path) => {
        if(!node) return

        path.push(node.val)

        if(!node.right && !node.left){
            paths.push(path.join("->"))
        }else{
            dfs(node.left, [...path])
            dfs(node.right, [...path])
        }
    };

    dfs(root, []);
    return paths
};