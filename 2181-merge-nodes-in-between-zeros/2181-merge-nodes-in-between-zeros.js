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
var mergeNodes = function(head) {
   
    let previous = head
    let current = previous.next
    let sum = 0
    
    while(current){
        if(current.val === 0){
            current.val = sum
            previous.next = current
            previous = previous.next
            current = current.next
            sum = 0
        }else{
            sum += current.val
            current = current.next
        }
    }
    
    return head.next
};