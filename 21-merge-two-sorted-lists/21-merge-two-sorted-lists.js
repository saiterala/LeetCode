/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2) return list2
    if(!list1) return list2
    if(!list2) return list1
    
    let curr = new ListNode()
    let head = curr
    let point1 = list1
    let point2 = list2
    
    while(point1 && point2){
        if(point1.val < point2.val){
            curr.next = point1
            point1 = point1.next
        }else{
            curr.next = point2
            point2 = point2.next
        }
        curr = curr.next
    }
    
    if(!point1){
        curr.next = point2
    }else curr.next = point1
    
    return head.next
};