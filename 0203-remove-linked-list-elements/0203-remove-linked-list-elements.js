/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let prev = new ListNode()
    let newHead = prev
    let current = head
    
    while(current != null){
        if(current.val !== val){
            prev.next = current
            prev = current
            current = current.next
        }else{
            current = current.next
            prev.next = null
        }
    }
    return newHead.next
};