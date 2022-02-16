/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    return getSwappedPairs(head)
};


const getSwappedPairs = (currentNode) => {
    if(!currentNode) return null
    let previous = null
    if(!currentNode.next) return currentNode 
    let next = currentNode.next
    
    currentNode.next = previous
    let newNext = next.next || null
    next.next = currentNode
    
    previous = currentNode
    currentNode = next
    
    previous.next = getSwappedPairs(newNext)
    return currentNode
    
}