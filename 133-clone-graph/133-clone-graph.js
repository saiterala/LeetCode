/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return node
    if(!node.neighbors) return new Node(node.val)
    const map = new Map()
    const queue = []
    queue.push([node, null])
    while(queue.length){
        const [nd, neighbor] = queue.pop()
        if(map.has(nd)){
            neighbor.neighbors.push(map.get(nd))
            continue
        }
        const newNode = new Node(nd.val)
        map.set(nd, newNode)
        
        if(neighbor){
            neighbor.neighbors.push(newNode)
        }
        for(const neighborNode of nd.neighbors){
            if(map.has(neighborNode)){
                newNode.neighbors.push(map.get(neighborNode))
            }
            else {
            
                queue.push([neighborNode, newNode])
            }
        }
    }
    return map.get(node)
};