/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return head
    let curr = head
    const map = new Map
    
    while (curr) {
        const node = new Node(curr.val, null, null)
        map.set(curr, node)
        curr = curr.next
    }
    
    curr = head
   
    while(curr){
        const copyNode = map.get(curr)
        copyNode.next = map.get(curr.next) || null
        copyNode.random = map.get(curr.random) || null
        curr = curr.next
    }
    return map.get(head)
};