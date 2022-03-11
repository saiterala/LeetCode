/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || k === 0) return head
    
    let length = 1
    let tail = head
    while (tail.next){
        tail = tail.next
        length++
    }
    
    const newK = k >= length ? k % length : k
    
    if( newK === 0 ) return head
    
    let newTail = head
    let count = length - newK
    
    while(count > 1){
        newTail = newTail.next
        count--
    }
  
    
    tail.next = head
    const temp = newTail.next
    newTail.next = null
    head = temp
    
    return head
};