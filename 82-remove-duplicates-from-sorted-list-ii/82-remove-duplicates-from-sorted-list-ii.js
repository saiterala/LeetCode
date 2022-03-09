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
var deleteDuplicates = function(head) {
    if(!head || head.next == null) return head
    
    let newHead = new ListNode()
    let lastUnique = newHead
    let prev = head
    let curr = head.next
    let foundDup = false
    
    while(curr){
        if(prev.val !== curr.val){
            if(foundDup){
                prev = curr
                lastUnique.next = prev
                foundDup = false
            }else{
                lastUnique.next = prev
                lastUnique = prev
                prev= curr
            }
        }else foundDup = true
        
        curr = curr.next
    }
    if(foundDup) lastUnique.next = null
    
    return newHead.next
};