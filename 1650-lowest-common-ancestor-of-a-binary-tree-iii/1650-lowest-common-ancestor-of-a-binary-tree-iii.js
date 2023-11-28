/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    const depthOfP = getDepth(p)
    const depthOfQ = getDepth(q)
    
    if(depthOfP > depthOfQ){
        return getLowestAncestor(p, q, depthOfP-depthOfQ)
    }else return getLowestAncestor(q, p, depthOfQ - depthOfP)
};

const getDepth = (node) => {
    let depth = 0
    while(node.parent != null){
        node = node.parent
        depth++
    }
    return depth
}

const getLowestAncestor = (node1, node2, depth) => {
    while(depth > 0){
        node1 = node1.parent
        depth--
    }
    while(node1.val !== node2.val){
        node1 = node1.parent;
        node2 = node2.parent;
    }
    return node1
}