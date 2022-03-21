/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const nodeArray = []
    serializeHelper(root, nodeArray)
    console.log(nodeArray.join(','))
    return nodeArray.join(',')
};

const serializeHelper = (node, arr) => {
    if(!node){
        arr.push('null')
        return
    }
    arr.push(node.val)
    serializeHelper(node.left, arr)
    serializeHelper(node.right, arr)
}


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
   data = data.split(',')
   const idx = new Idx(0)
   return deserializeHelper(data, idx)
    
};

class Idx {
    constructor(val){
        this.val = val
    }
}

const deserializeHelper = (data, idx) => {
    const value = data[idx.val]
    if(value === 'null') return null
    
    const node = new TreeNode(value)
    
    idx.val++
    node.left = deserializeHelper(data, idx)
    
    idx.val++
    node.right = deserializeHelper(data, idx)
    
    return node
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */