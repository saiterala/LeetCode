/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const recursiveCheck = (node) => {
        if(node !== null){
            console.log(node.val)
            if(!recursiveCheck(node.next)) return false
            if(node.val !== frontNode.val) return false
            frontNode = frontNode.next
        }
        return true
    }
    
    let frontNode = head;
    return recursiveCheck(head)
};