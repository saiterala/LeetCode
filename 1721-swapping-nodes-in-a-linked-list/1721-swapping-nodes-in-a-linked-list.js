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
var swapNodes = function(head, k) {
    
    let start = head
    let end = head
    let count = 1
    let first
    let second
    
    if(!end.next) return head
    
    while(end !== null){
        if(count < k){
            end = end.next
            count++
        }else if(count === k){
            first = end
            count++
        }else {
            second = start
            start = start.next
            end = end.next
            count++
        }
    }
    
    const temp  = second.val
    second.val = first.val
    first.val = temp
    
    return head
};