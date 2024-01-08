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
    prev.next = current
    
    while(current != null){
        if(current.val !== val){
            prev = current
        }else{   
            prev.next = current.next
        }
        current = current.next
    }
    return newHead.next
};