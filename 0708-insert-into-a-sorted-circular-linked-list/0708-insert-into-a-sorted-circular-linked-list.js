/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    if(head == null){
        const newNode = new Node(insertVal, null)
        newNode.next = newNode
        return newNode
    }
    
    let prev = head
    let curr = head.next
    let isInsert = false
    
    do{
       if(prev.val <= insertVal && insertVal <= curr.val){
           isInsert = true
       }
        else if(prev.val > curr.val){
            if(insertVal >= prev.val || insertVal <= curr.val){
                isInsert = true
            }
        }
        if(isInsert){
            prev.next = new Node(insertVal, curr)
            return head
        }
        prev = curr
        curr = curr.next
    }while(prev != head)
        
    prev.next = new Node(insertVal, curr)
    return head
    
};