/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return add(l1,l2)
};

const add = (node1, node2, sum = 0) => {
    if(!(node1 || node2 || sum)) return null
    
    if(node1?.val) sum += node1.val
    if(node2?.val) sum += node2.val
    let val = sum
    let carry = 0
    if(sum >= 10){
        val = sum - 10
        carry = 1
    } 
    
    return new ListNode(val, add(node1?.next, node2?.next, carry))
}